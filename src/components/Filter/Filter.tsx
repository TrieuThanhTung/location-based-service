import React from 'react'
import './Filter.css'

type FilterProps = {
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<FilterProps> = ({filter, setFilter}) => {
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(filter === e.target.value) {
      setFilter('')
      return;
    }
    setFilter(e.target.value)
  }

  return (
    <div className="filter-container">
      <h4>Bộ lọc</h4>
      <label>
        <input 
          type="checkbox" 
          id="restaurant-filter" 
          checked={filter === 'cuisine'} 
          value="cuisine" 
          onChange={handleChangeFilter} 
        />
        Ẩm thực
      </label>
      <label>
        <input 
          type="checkbox" 
          id="cafe-filter" 
          checked={filter === 'entertainment'} 
          value="entertainment" 
          onChange={handleChangeFilter} 
        />
        Giải trí
      </label>
      <label>
        <input 
          type="checkbox" 
          id="bar-filter" 
          checked={filter === 'shopping'} 
          value="shopping" 
          onChange={handleChangeFilter} 
        />
        Mua sắm
      </label>
    </div>
  )
}

export default Filter