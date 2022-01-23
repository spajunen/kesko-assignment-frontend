import React from 'react'
import Avatar from '@mui/material/Avatar';
import { green, yellow, red } from '@mui/material/colors';

const TrafficLights = ({traffic}) => {
    if (traffic === 'low'){
        return  <Avatar sx={{ bgcolor: green[500] }}>L</Avatar> 
    } else if (traffic === 'medium') {
        return  <Avatar sx={{ bgcolor: yellow[500] }}>M</Avatar> 
    } else if (traffic === 'high'){
        return  <Avatar sx={{ bgcolor: red[500] }}>H</Avatar> 
    }
    
}

export default TrafficLights