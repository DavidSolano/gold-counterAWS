import React, { Component } from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';


class NewCountry extends Component {
    state = { open: false, name: '' }

    handleClickOpen = () => {
        this.setState({ open: true, name: '' })
    }

    handleClickClose = () => {
        this.setState({ open: false })
    }

    handleAddingCountry = (x) => {
        x.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({ open: false });
    }

    handleChange = (y) => this.setState({ [y.target.name]: y.target.value });

    render() {

        // const { classes } = this.props;
        const { open } = this.state;

        return (
            <React.Fragment>
                <Box sx={{ '& :not(style)': { m: 1 } }}>
                    <Fab variant="extended" color="primary" aria-label="add" onClick={this.handleClickOpen}>
                        <AddIcon /> Add Country
                    </Fab>
                </Box>

                <Dialog open={open} onClose={this.handleClickClose}>
                    <form onSubmit={(x) => this.handleAddingCountry(x)}>
                        <DialogTitle>Add Country</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Type the name of the country you want to add ʕ •ᴥ•ʔ
                            </DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                label="Country Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={this.handleClickClose}>
                                Close
                            </Button>

                            <Button type="submit">
                                Add
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default NewCountry;