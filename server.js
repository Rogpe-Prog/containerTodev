const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "🚀 API rodando dentro do container!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
