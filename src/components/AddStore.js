import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import storeService from '../services/stores'

function AddStore({ stores, setStores }) {
  const [newStore, setNewStore] = useState('')
  const [newTraffic, setNewTraffic] = useState('')
  const [open, setOpen] = useState(false)

  const addStore = (event) => {
    event.preventDefault()

    if(newStore !== '' && newTraffic !== ''){
      const storeObject = {
        name: newStore,
        traffic: newTraffic,
        date: new Date().toISOString(),
      }
      storeService
        .create(storeObject)
        .then((returnedStore) => {
          setStores(stores.concat(returnedStore))
          setNewStore('')
          setNewTraffic('')
        })
        .catch(error => {
          alert('Creation failed: ' + error.message)
        })
      handleClose()
    }else{
      alert('Store name or traffic missing!')
    }
  }

  const handleStoreChange = (event) => setNewStore(event.target.value)

  const handleTrafficChange = (event) => setNewTraffic(event.target.value)

  const handleClickOpen = () => setOpen(true)

  const handleClose = (reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          bottom: 16, left: 16, marginTop: 2, marginLeft: 2,
        }}
      >
        <AddIcon onClick={handleClickOpen} />
      </Fab>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add new store</DialogTitle>
        <DialogContent>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-basic"
              label="Store name"
              variant="outlined"
              value={newStore}
              onChange={handleStoreChange}
            />
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">Traffic</InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={newTraffic}
                label="Traffic"
                onChange={handleTrafficChange}
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addStore}>Send</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default AddStore
