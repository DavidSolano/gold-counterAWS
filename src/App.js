import './App.css';
import React, { Component } from 'react';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', goldMedalCount: 3 },
      { id: 2, name: 'Switzerland', goldMedalCount: 2 },
      { id: 3, name: 'Germany', goldMedalCount: 0 }
    ]
  }

  render() {
    return (
      <div>
        <header className='App-header'>
          Gold Medals
        </header>
        
        { this.state.countries.map(country => 
        <Country
          country={ country }
          key={ country.id }
        />) }
      </div>
    )
  }
}

export default App;