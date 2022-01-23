import React, { useState, useEffect } from 'react'
import storeService from '../services/stores'
import AddStore from './AddStore'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import TrafficLights from './TrafficLights';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UpdateTraffic from './UpdateTraffic';
import NavBar from './NavBar';



const Storelist = () => {
    const [stores, setStores] = useState([])

    useEffect(() => {
        storeService
          .getAll()
          .then(initialStores => {
          setStores(initialStores)
        })
      }, [])

      const theme = createTheme({
        palette: {
          primary: {
            main: '#ee6b00',
          },
          secondary: {
            main: '#1a237e',
          },
        },
      });

    return (
        <div>
          <ThemeProvider theme={theme}>
            <NavBar />
            <TableContainer component={Paper} sx={{margin: 3}}>
      <Table sx={{ minWidth: 650}} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Store</TableCell>
            <TableCell>Traffic</TableCell>
            <TableCell>Updated</TableCell>
            <TableCell>Update Traffic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((store) => (
            <TableRow
              key={store.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {store.name}
              </TableCell>
              <TableCell><TrafficLights traffic={store.traffic}/></TableCell>
              <TableCell>{moment(store.date).format('llll')}</TableCell>
              <TableCell><UpdateTraffic store={store} stores={stores} setStores={setStores}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         
    <AddStore stores={stores} setStores={setStores}/>
    </ThemeProvider>
      </div>
    )
}

export default Storelist