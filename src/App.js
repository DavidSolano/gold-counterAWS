import React, { useEffect, useRef, useState } from 'react';
import Country from './components/Country';
import NewCountry from './components/NewCountry';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const medals = useRef([
    { id: 1, name: 'gold' },
    { id: 2, name: 'silver' },
    { id: 3, name: 'bronze' },
  ]);

  useEffect(() => {
    let fetchCountries = [
      { id: 1, name: 'United States', gold: 3, silver: 2, bronze: 1 },
      { id: 2, name: 'Switzerland', gold: 2, silver: 2, bronze: 1  },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 1  },
    ]

    setCountries(fetchCountries);
  }, []);

  const handleIncrement = (countryId, medalName) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((i) => i.id === countryId);
    countriesMutable[idx][medalName] += 1;
    setCountries(countriesMutable);
  }

  const handleDecrament = (countryId, medalName) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((l) => l.id === countryId)
    countriesMutable[idx][medalName] -= 1;
    setCountries(countriesMutable);
  }

  const totalMedals = () => {
    let total = 0;
    medals.current.forEach(x => {
      total += countries.reduce((o, t) => o + t[x.name], 0)
    });
    return total;
  }

  const addCountry = (name) => {
  
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const countriesMutable = [...countries].concat({id: id, name: name, gold: 0, silver: 0, bronze: 0});
    setCountries(countriesMutable);
  }

  const deleteCountry = (countryId) => {
    const countriesMutable = [...countries].filter(x => x.id !== countryId);
    
    setCountries(countriesMutable);
  }

  return (
    <React.Fragment>
        <div>
          <header className='App-header'>
            PogOlympics { totalMedals() }
          </header>
        </div>

          <Container fixed={true}>
            <Grid justifyContent="center" container>
              { countries.map(country => 
                <Grid>
                    <Country
                      country={ country }
                      key={ country.id }
                      medals={ medals.current }
                      handleIncrement={ handleIncrement }
                      handleDecrament={ handleDecrament }
                      deleteCountry={ deleteCountry }/>
                </Grid>
                ) }
            </Grid>
            <NewCountry onAdd={addCountry} />
          </Container>
    </React.Fragment>
  );
}

export default App;