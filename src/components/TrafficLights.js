import React from 'react'
import Avatar from '@mui/material/Avatar'
import { green, yellow, red } from '@mui/material/colors'

function TrafficLights({ traffic }) {
  if (traffic === 'low') {
    return <Avatar sx={{ bgcolor: green[500] }}>L</Avatar>
  } if (traffic === 'medium') {
    return <Avatar sx={{ bgcolor: yellow[500] }}>M</Avatar>
  } if (traffic === 'high') {
    return <Avatar sx={{ bgcolor: red[500] }}>H</Avatar>
  }
}

export default TrafficLights
