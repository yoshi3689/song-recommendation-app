import { Button, Tooltip, Typography } from '@mui/material'

const Login = () => {
  const handleLoginClick = async (e: any) => {
    try {
      e.preventDefault()
      window.open(process.env.REACT_APP_API_SPOTIFY_AUTH + "/login", "_self")
    } catch (error) {
      console.error(error);
    }
  }
      
  return (
    <Tooltip title="Connect Spotify account" placement='top'>
      <Button variant='contained' onClick={handleLoginClick}>
        <Typography color="white">Connect</Typography>
      </Button>
    </Tooltip>
  )
}

export default Login