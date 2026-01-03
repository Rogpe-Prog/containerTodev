require("dotenv").config();
const express = require("express");
const { getStatesAll } = require("./src/adsb/adsb.client");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "🚀 API rodando dentro do container!" });
});

app.get("/adsb/states", async (req, res) => {
  try {
    const lat = Number(req.query.lat) || -23.55;
    const lon = Number(req.query.lon) || -46.63;
    const dist = Number(req.query.dist) || 300;

    const data = await getStatesAll({ lat, lon, dist });

    res.json(data);
  } catch (err) {
    console.error("🔥 ERRO ADS-B 🔥");
    console.error(err.response?.status || err.message);

    res.status(err.response?.status || 500).json({
      error: "Erro ao consultar provider ADS-B",
      details: err.response?.data || err.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
