
// import { useEffect, useState } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner';
import CoinTable from './Component/CoinTable/CoinTable';
import Navbar from './Component/Navbar/Navbar';
// import getCoinByMarket from './Services/getCoinByMarket';

function App() {
  
  return (
   <>
      <Navbar />
      <Banner/>
      <CoinTable />
     
   </>
  );
}

export default App
