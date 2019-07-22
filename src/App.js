import React, { Component } from 'react';

import Navbar from  './components/navbar/Navbar';
import "./components/styles/App.scss"
import TourList from './components/Tourlist'

class App extends Component {
  render () {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>

    ) 
  }
}

export default App;
