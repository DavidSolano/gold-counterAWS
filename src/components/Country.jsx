import { Box, CardContent, Divider, Card } from '@mui/material';
import { Grid } from '@mui/material';
import React, { Component } from 'react';
import Medal from './Medal';
import '../App.css';

class Country extends Component {
    countryMedalTotal (country, medals) {
        let total = 0;
        medals.forEach(m => {
            total += country[m.name];
        });
        return total;
    }

    render() { 
        const { country, medals, handleIncrement, handleDecrament } = this.props;
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container margin="3px" justify="center" alignItems="center" style={{ minHeight: '10vh' }} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
                    <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Card sx={{ p: 1 }}>
                                <div className='contentGrid'>
                                    { country.name } { this.countryMedalTotal( country, medals )}
                                </div>
                                
                                <Divider sx={{ my: 1 }} />

                                <CardContent sx={{ my: .015 }}>
                                    { medals.map( medal => 
                                        <Medal 
                                            key={ medal.id } 
                                            country={ country } 
                                            medal={ medal } 
                                            handleIncrement={ handleIncrement } 
                                            handleDecrament={ handleDecrament } 
                                        />)}
                                </CardContent>

                                <div>
                                    
                                </div>
                            </Card>
                            
                        </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </Box>
        );
    }
}

export default Country;