import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, CardContent, Divider, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import React, { Component } from 'react';
import '../App.css';

// const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//     }));  


class Country extends Component {
    state = { 
        name: this.props.country.name,
        gold: this.props.country.goldMedalCount
    } 
    
    // updates gold stae property (1 click equals 1 gold)
    handleIncrement = () =>{
        console.log(this.state.gold)
        this.setState({ gold: this.state.gold + 1 });
    }

    handleDecrament = () =>{
        this.setState({ gold: this.state.gold -1 });
    }

    render() { 
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container margin="3px" justify="center" alignItems="center" style={{ minHeight: '10vh' }} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Card sx={{ p: 1 }}>
                            <div className='contentGrid'>
                                {this.state.name}
                            </div>
                            
                            <Divider sx={{ my: 1 }} />

                            <CardContent sx={{ my: .015 }}>
                                Gold Medals: {this.state.gold}
                            </CardContent>

                            <div>
                                <Button className='funkyBtn' onClick={ this.handleIncrement } variant="outlined"><ArrowUpwardIcon /></Button> 
                                <Button className='funkyBtn' onClick={ this.handleDecrament } variant='outlined'><ArrowDownwardIcon /></Button>
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