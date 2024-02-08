import {useEffect} from "react"
import { Button } from '@mui/material'
import { useLazyGetProfileQuery } from '../../features/API/spotifyAdvancedApiSlice';

const AuthRequired = () => {
  const [trigger] = useLazyGetProfileQuery();

  const fetchProfile = async() => {
    await trigger()
  }
  
  return (
    <>
      <Button variant='contained' onClick={() => fetchProfile()}>Show Profile</Button>
      
    </>
  )
}

export default AuthRequired

