import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import logo from '../assets/Kesko_logo.png'

function NavBar() {
  return (
    <Box sx={{
      flexGrow: 2, marginLeft: '20px', marginTop: '10px', backgroundColor: 'white',
    }}
    >

      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <img alt="Kesko" src={logo} width="50" height="50" />
          <Typography variant="h5" component="div" color="secondary" fontWeight="bold" sx={{ flexGrow: 1, padding: '20px' }}>
            CHECK AND UPDATE TRAFFIC IN STORES
          </Typography>
        </Toolbar>
      </AppBar>

    </Box>

  )
}

export default NavBar
