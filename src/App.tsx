import './App.css'
import Map from './components/Map';
import Filter from './components/Filter/Filter';
import { useState } from 'react';
import { LocationType, PlaceType } from './data/Util';

function App() {
  const [filter, setFilter] = useState('')
  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 21.0245,
    lon: 105.84117
  })
  const [dataSearch, setDataSearch] = useState<PlaceType[]>()
   
  return (
    <>
      <Map filter={filter} centerLocation={centerLocation}/>
      <Filter filter={filter} setFilter={setFilter} dataSearch={dataSearch} setDataSearch={setDataSearch} setCenterLocation={setCenterLocation}/>
    </>
  )
}

export default App
