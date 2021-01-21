import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Navbar from './components/headers/Navbar/Navbar'
import Bottom from './components/headers/bottom/Bottom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className='all'>
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          
          <MainPages />
          <div style ={{height: "40px"}}></div>
          <Bottom />
        </div>
      </Router>
    </DataProvider>
  </div>
  );
}

export default App;
