import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { TextField } from '@material-ui/core';

const Navbar = () => {
    return(
        <AppBar position="fixed" color="primary">
            <ToolBar>
                <Typography variant="h6">Git Finder</Typography>
                <TextField />
            </ToolBar>
        </AppBar>
    );
}

export default Navbar;