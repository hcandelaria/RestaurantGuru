export default (destination: object, location: object) => {
  let dist = 'N/A'
  try {
    navigator.geolocation.getCurrentPosition(
            position => {
              const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
            },
            (error) => error
        )
  } catch (e) {
    alert(e.message)
  }

  if ((destination.latitude == location.latitude) && (destination.longitude == location.longitude)) {
    return 0
  }

  let destinationRadLat = Math.PI * destination.latitude / 180
  let locationRadLat = Math.PI * location.latitude / 180
  let theta = destination.longitude - location.longitude
  let radtheta = Math.PI * theta / 180
  dist = Math.sin(destinationRadLat) * Math.sin(locationRadLat) + Math.cos(destinationRadLat) * Math.cos(locationRadLat) * Math.cos(radtheta)

  if (dist > 1) {
    dist = 1
  }
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515

  return dist
}
