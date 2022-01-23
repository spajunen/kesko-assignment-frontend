import UpdateIcon from '@mui/icons-material/Update'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import storeService from '../services/stores'

function UpdateTraffic({ store, stores, setStores }) {
  const [traffic, setTraffic] = useState('')
  const [open, setOpen] = useState(false)

  const updateTraffic = (event) => {
    event.preventDefault()
    const storeObject = {
      traffic,
    }

    storeService
      .update(store.id, storeObject)
      .then((returnedStore) => {
        setStores(stores.map((store) => (store.id === returnedStore.id ? returnedStore : store)))
        setTraffic('')
      })

    handleClose()
  }

  const handleTrafficChange = (event) => setTraffic(event.target.value)

  const handleClickOpen = () => setOpen(true)

  const handleClose = (reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  return (
    <div>
      <UpdateIcon fontSize="large" color="primary" onClick={handleClickOpen} />
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Update newTraffic</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Store name" variant="outlined" value={store.name} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Traffic</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={traffic}
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
          <Button onClick={updateTraffic}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UpdateTraffic
