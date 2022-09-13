import React, { } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const NewCountry = (props) => {
    const { onAdd } = props;

    const handleAddingCountry = () => {
        const name = prompt('Enter Country Name ʕ •ᴥ•ʔ');

        if (name && name.trim().length > 0) {
            onAdd(name)
        }
    }

    return (
        <React.Fragment>
            <div>
                <Button onClick={handleAddingCountry}>Add New Country <AddIcon /></Button>
            </div>
        </React.Fragment>
    );
}

export default NewCountry;