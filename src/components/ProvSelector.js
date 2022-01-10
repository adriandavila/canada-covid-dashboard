import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProvinceSelector(props) {
  

  const handleChange = (event) => {
    props.setProvince(event.target.value)

  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Province</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.province}
          onChange={handleChange}
          label="Province"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"ON"}>Ontario</MenuItem>
          <MenuItem value={"QC"}>Quebec</MenuItem>
          <MenuItem value={"AB"}>Alberta</MenuItem>
          <MenuItem value={"BC"}>British Columbia</MenuItem>
          <MenuItem value={"MB"}>Manitoba</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}