import './App.css'
import Map from './components/Map';
import Filter from './components/Filter/Filter';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('')
   
  return (
    <>
      <Map filter={filter} setFilter={setFilter}/>
      <Filter filter={filter} setFilter={setFilter} />
    </>
  )
}

export default App
