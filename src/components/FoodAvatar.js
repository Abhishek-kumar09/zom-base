import { Avatar, Box, Card, Typography } from '@material-ui/core'
import React from 'react'

export default function FoodAvatar() {
  return (
    <Box elevation={0} style={{ width: 'max-content', display: 'inline-block', padding: '10px' }}>
      <Avatar src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"
        alt=""
        style={{ height: '80px', width: '80px', marginBottom: '10px' }} />
      <Typography variant="caption" >
        Chicken
      </Typography>
    </Box>
  )
}