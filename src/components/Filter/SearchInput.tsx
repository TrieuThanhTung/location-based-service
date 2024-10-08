import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { LocationType, PlaceType } from '../../data/Util';

type SearchInputProps = {
  setDataSearch: React.Dispatch<React.SetStateAction<PlaceType[] | undefined>>,
  setCenterLocation: React.Dispatch<React.SetStateAction<LocationType>>
}

export default function SearchInput({ setDataSearch, setCenterLocation }: SearchInputProps) {
  const [searchInput, setSearchInput] = React.useState('')

  const fectchData = async (query: string) => {
    if (searchInput === '') return;
    try {
      const res = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`)
      setDataSearch(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitSearch = async () => {
    if (searchInput === '') {
      setDataSearch(undefined)
      setCenterLocation({
        lat: 21.0245,
        lon: 105.84117
      })
      return;
    }
    await fectchData(searchInput)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      handleSubmitSearch()
    }
  }

  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tìm kiếm"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={e => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSubmitSearch}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
