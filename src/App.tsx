import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'
// import { hospital } from './data/hospital';
import { restaurant } from './data/restaurant';
import { useEffect, useState } from 'react';
import ServiceApi from './api/ServiceApi';

function App() {
  const [userLocation, setUserLocation] = useState({
    lat: 21.0245,
    lon: 105.84117
  })

  const fetch = async () => {
    try {
      const res = await ServiceApi.getRestaurantsAround1Km()
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      })
    }
    fetch()
  }, [])
   
  return (
    <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[userLocation.lat, userLocation.lon]}>
      </Marker>
      {/* {
        restaurant.elements.map((ele, index) => {
          const lat = ele.lat!
          const lon = ele.lon!
          if(lat && lon) {
            return (
              <Marker
                key={index}
                position={[lat, lon]}
              >
                <Popup>Hospital: {ele.tags.name}</Popup>
              </Marker>
            )
          }
        })
      } */}
    </MapContainer>
  )
}

export default App
