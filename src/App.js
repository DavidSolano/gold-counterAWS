import './App.css';
import React, { Component } from 'react';
import Country from './components/Country';
import NewCountry from './components/NewCountry';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme ({
  palette: {
    mode: 'dark',
  },
})

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

  addCountry = (name) => {
    const {countries} = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const countriesMutable = [...countries].concat({id: id, name: name, gold: 0, silver: 0, bronze: 0});

    this.setState({countries: countriesMutable});
  }

  deleteCountry = (countryId) => {
    const {countries} = this.state;
    const countriesMutable = [...countries].filter(x => x.id !== countryId);
    
    this.setState({countries: countriesMutable})
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={darkTheme}>
        <div>
          <header className='App-header'>
            PogOlympics { this.totalMedals() }
          </header>
        </div>

          <Container fixed={true}>
            <Grid justifyContent="center" container>
              { this.state.countries.map(country => 
                <Grid>
                    <Country
                      country={ country }
                      key={ country.id }
                      medals={ this.state.medals }
                      handleIncrement={ this.handleIncrement }
                      handleDecrament={ this.handleDecrament }
                      deleteCountry={ this.deleteCountry }/>
                </Grid>
                ) }
            </Grid>
            <NewCountry onAdd={this.addCountry} />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;