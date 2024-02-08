import { useEffect } from "react"
import { Button, Typography } from '@mui/material'
import { useLazyGetProfileQuery } from "../../features/API/spotifyAdvancedApiSlice";

const Login = () => {
  // const [trigger, result, lastPromise] = useLazyGetProfileQuery();
  
  const handleLoginClick = async (e: any) => {
    try {
      e.preventDefault()
      window.open(process.env.REACT_APP_SPOTIFY_API_URL_DEV + "/api/SpotifyAuth/login", "_self")
    } catch (error) {
      console.error(error);
    }
  }
  // const fetchProfile = async() => {
  //   const res = await trigger()
  //     console.log(res)
  // }
  // useEffect(() => {
  //   if (window.location.search.includes("profile")) {
  //     fetchProfile();
  //   }
  // }, [])
      
  return (
    <Button variant='contained' onClick={handleLoginClick}>
      <Typography color="white">Login</Typography>
    </Button>
  )
}

export default Login