import './App.css';
import React, { Component } from 'react';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 3, silver: 2, bronze: 1 },
      { id: 2, name: 'Switzerland', gold: 2, silver: 2, bronze: 1  },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 1  }
    ],
    medals: [
      { id: 1, name: 'gold' },
      { id: 2, name: 'silver' },
      { id: 3, name: 'bronze' }
    ]
  }

  handleIncrement = (countryId, medalName) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((i) => i.id === countryId);
    countriesMutable[idx][medalName] += 1;
    this.setState({ countries: countriesMutable })
  }

  handleDecrament = (countryId, medalName) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((l) => l.id === countryId)
    countriesMutable[idx][medalName] -= 1;
    this.setState({ countries: countriesMutable });
  }

  totalMedals() {
    let total = 0;
    this.state.medals.forEach(x => {
      total += this.state.countries.reduce((o, t) => o + t[x.name], 0)
    });
    return total;
  }

  render() {
    return (
      <div>
        <header className='App-header'>
          PogOlympics { this.totalMedals() }
        </header>
        
        { this.state.countries.map(country => 
        <Country
          country={ country }
          key={ country.id }
          medals={ this.state.medals }
          handleIncrement={ this.handleIncrement }
          handleDecrament={ this.handleDecrament }
        />) }
      </div>
    )
  }
}

export default App;