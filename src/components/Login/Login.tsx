import { Button, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  const handleLoginClick = async (e: any) => {
    try {
      e.preventDefault()
      window.open(process.env.REACT_APP_SPOTIFY_API_URL_DEV + "/api/SpotifyAuth/login", "_self")
    } catch (error) {
      console.error(error);
    }
  }
      
  return (
    <Button variant='contained' onClick={handleLoginClick}>
      <Typography color="white">Login</Typography>
    </Button>
  )
}

export default Login