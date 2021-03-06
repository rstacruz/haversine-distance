const atan2 = Math.atan2
const cos = Math.cos
const sin = Math.sin
const sqrt = Math.sqrt
const PI = Math.PI

 // (mean) radius of Earth (meters)
const R = 6378137

function squared (x) { return x * x }
function toRad (x) { return x * PI / 180.0 }

// https://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3
module.exports = function haversineDistance (a, b) {
  var aLat = a.latitude || a.lat
  var bLat = b.latitude || b.lat
  var aLng = a.longitude || a.lng
  var bLng = b.longitude || b.lng

  var dLat = toRad(bLat - aLat)
  var dLon = toRad(bLng - aLng)

  var f = squared(sin(dLat / 2.0)) + cos(toRad(aLat)) * cos(toRad(bLat)) * squared(sin(dLon / 2.0))
  var c = 2 * atan2(sqrt(f), sqrt(1 - f))

  return R * c
}

