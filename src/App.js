import './App.css';
import React from 'react';
import Navbar from './components/NavBar/NavBar'
import Banner from './components/banner/banner'
import RowPost from './components/RowPost/RowPost';
import {actions,orginals,romantic,horror} from './URLS/url'

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Banner></Banner>
     <RowPost url={orginals} title='Films' isSmall={false}/>
     <RowPost url={actions} title='Action' isSmall={true}/>
     <RowPost url={romantic} title='Romatic Movies' isSmall={true}/>
     <RowPost url={horror} title='Horror Movies' isSmall={true}/>
    </div>
  );
}

export default App;
