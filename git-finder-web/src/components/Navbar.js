import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Navbar = () => {
    return(
        <AppBar position="static" color="primary">
            <ToolBar>
                <Typography variant="h6">Git Finder</Typography>
            </ToolBar>
        </AppBar>
    );
}

export default Navbar;