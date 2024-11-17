const { getDistance } = require('geolib');

function calculateDistance(coord1, coord2) {
  return getDistance(
    { latitude: coord1.lat, longitude: coord1.lng },
    { latitude: coord2.lat, longitude: coord2.lng }
  ) / 1000; 
}

module.exports = calculateDistance;
