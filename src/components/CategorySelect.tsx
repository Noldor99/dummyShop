import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { setCurrentСategory } from '../store/redusers/filterSlice';
import { useTypedSelector } from '../hook/useTypedSelector';


const CategorySelect: React.FC = () => {

  const dispatch = useDispatch()

  const { categoryAll, currentСategory } = useTypedSelector(state => state.filter);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setCurrentСategory(event.target.value))
  };

  return (
    <Box sx={{ width: '100%' }} >
      <FormControl sx={{ width: '100%' }} >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentСategory}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem key='All' value='All'>All</MenuItem>
          {categoryAll.map((name) =>
            <MenuItem key={name} value={name}>{name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CategorySelect