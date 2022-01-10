import logo from './logo.svg';
import './App.css';
import React from 'react'



import Navbar from './components/Navigation'
import ProvinceSelector from './components/ProvSelector'
import Button from '@mui/material/Button';


import { getCaseData } from './components/data/covid-data';
import CasesGraph from './components/data/covid-data';


function App() {
  const [province, setProvince] = React.useState('ON');
 

  return (
    
    <div className="App">
      <Navbar />

      <ProvinceSelector province={province} setProvince={setProvince} />

      <Button variant="contained" onClick={() => {getCaseData(province)}}>Get Data</Button>

      
      <CasesGraph province={province} />

      
    </div>
  );
}

export default App;
