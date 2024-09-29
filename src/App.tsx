import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './App.css'
import { useEffect, useState } from 'react';
import ServiceApi from './api/ServiceApi';
import { OverpassType } from './data/Util';

function App() {
  const [userLocation, setUserLocation] = useState<{
    lat: number,
    lon: number
  }>({
    lat: 21.0245,
    lon: 105.84117
  })

  const [data, setData] = useState<OverpassType>()

  const fetch = async () => {
    try {
      if(!userLocation.lat && !userLocation.lon) {
        return;
      }
      if(userLocation.lat == 21.0245) return
      const res = await ServiceApi.getRestaurantsAround1Km(userLocation.lat, userLocation.lon)
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch()
  }, [userLocation])

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      })
    }
  }, [])
   
  return (
    <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[userLocation.lat, userLocation.lon]}>
        <Popup>Your location</Popup>
      </Marker>
      {
        data?.elements.map((ele, index) => {
          const lat = ele.lat!
          const lon = ele.lon!
          if(lat && lon) {
            return (
              <Marker
                key={index}
                position={[lat, lon]}
              >
                <Popup>{ele?.tags?.name}</Popup>
              </Marker>
            )
          }
        })
      }
    </MapContainer>
  )
}

export default App
