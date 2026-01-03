const axios = require("axios");

/**
 * ADS-B Provider: airplanes.live
 * Endpoint público e funcional (2026)
 * https://airplanes.live/api
 */
async function getStatesAll() {
  // São Paulo 300KM (exemplo)
  const lat = -23.55;
  const lon = -46.63;
  const dist = 10; // km

  const response = await axios.get(
    `https://api.airplanes.live/v2/point/${lat}/${lon}/${dist}`,
    { timeout: 10000 }
  );

  return {
    time: Math.floor(Date.now() / 1000),
    states: response.data.ac || [],
  };
}

module.exports = { getStatesAll };
