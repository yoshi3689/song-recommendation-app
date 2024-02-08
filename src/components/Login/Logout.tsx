import React from 'react'
import { Button, Avatar, Box, Typography, Tooltip } from '@mui/material'

interface ILogout {
  username: string;
  imgUrl: string;
}
const Logout = ({ username, imgUrl }: ILogout) => {
  // when the button is pressed
    // clear the cookie
  // reset the API data cache
  const handleLogout = () => {
    console.log("Logging you out")
  }
  return (
    <Tooltip title={`Connected to ${username}`} placement='top'>
      <Button variant="contained" onClick={handleLogout}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography sx={{ mr: 2 }} color="white">{username }</Typography>
        <Avatar alt={username} src={imgUrl} />
      </Box>
    </Button>
    </Tooltip>
  )
}

export default Logout