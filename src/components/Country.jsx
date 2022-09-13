import { Box, CardContent, Divider, Card } from '@mui/material';
import { Button } from '@mui/material';
import Medal from './Medal';
import '../App.css';

const Country = (props) => {
    const { country, medals, handleIncrement, handleDecrament, deleteCountry } = props;

    const countryMedalTotal = (country, medals) => {
        let total = 0;
        medals.forEach(m => {
            total += country[m.name];
        });
        return total;
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Card sx={{ x: 1 }}>
                <div className='contentGrid'>
                    {country.name} {countryMedalTotal(country, medals)}
                </div>

                <Divider sx={{ my: 1 }} />

                <CardContent sx={{ my: .015 }}>
                    {medals.map(medal =>
                        <Medal
                            key={medal.id}
                            country={country}
                            medal={medal}
                            handleIncrement={handleIncrement}
                            handleDecrament={handleDecrament}
                        />)}

                    <Button onClick={() => deleteCountry(country.id)}>Delete</Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Country;