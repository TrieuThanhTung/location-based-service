import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'
import { hospital } from './data/hospital';

function App() {
  if(navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      console.log("latitude: ", position.coords.latitude)
      console.log("longitude: ", position.coords.longitude)
    })
  }
   
  return (
    <MapContainer center={[21.0245, 105.84117]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[21.0245, 105.84117]}>
      </Marker>
      {
        hospital.elements.map((ele, index) => {
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
      }
    </MapContainer>
  )
}

export default App
