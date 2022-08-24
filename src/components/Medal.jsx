import React, { Component } from 'react';
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

class Medal extends Component {
    state = { }
    render() {
        const { country, medal, handleIncrement, handleDecrament } = this.props;

        return (
            <div>
                { medal.name } Medals:{ country[medal.name] }
                <Button onClick={ () => handleIncrement(country.id, medal.name) } variant="outlined"><ArrowUpwardIcon /></Button>
                <Button disabled={ country[medal.name] === 0 } onClick={ () => handleDecrament(country.id, medal.name) } variant="outlined"><ArrowDownwardIcon /></Button>
            </div>
        )
    }
}

export default Medal