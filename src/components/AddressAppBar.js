import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { LocationOn } from '@material-ui/icons';
import React from 'react';


export default function AddressAppBar(props) {
  return (
    <AppBar>
      <Toolbar style={{ backgroundColor: '#fff' }} >
        <LocationOn style={{color: '#000', marginRight: '8px'}} />
        <TextField
          color="secondary"
          placeholder="Kunwar Singh nagar Nangloi"
          fullWidth
        />
      </Toolbar>
    </AppBar>

  );
}
