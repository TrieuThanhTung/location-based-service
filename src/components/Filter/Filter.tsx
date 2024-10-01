import React from 'react'
import './Filter.css'
import SearchInput from './SearchInput';
import { LocationType, PlaceType } from '../../data/Util';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import placeholder from '../../assets/placeholder.png'

type FilterProps = {
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>,
  dataSearch: PlaceType[] | undefined,
  setDataSearch: React.Dispatch<React.SetStateAction<PlaceType[] | undefined>>,
  setCenterLocation: React.Dispatch<React.SetStateAction<LocationType>>
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter, dataSearch, setDataSearch, setCenterLocation }) => {
  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (filter === e.target.value) {
      setFilter('')
      return;
    }
    setFilter(e.target.value)
  }

  const handleChangeCenterLocation = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>, item?: PlaceType) => {
    if(!item) return;
    setCenterLocation({
      lat: item.lat,
      lon: item.lon
    })
  }

  return (
    <div className="filter-container">
      <SearchInput setDataSearch={setDataSearch} />
      {!dataSearch && <div>
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
      </div>}
      {dataSearch && <List style={{width: '408px', maxHeight: '600px', overflowY: 'auto'}} component="nav" aria-label="main mailbox folders">
          {dataSearch?.map((item) => {
            return (
              <div key={item?.place_id} onClick={e => handleChangeCenterLocation(e, item)}>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src={placeholder}
                      alt="Placeholder"
                      style={{ width: 38, height: 38 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItemButton>
              </div>
            );
          })}
        </List>}
    </div>
  )
}

export default Filter