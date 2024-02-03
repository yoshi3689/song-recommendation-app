import { Button } from '@mui/material'
import { useLazyTestAuthQuery } from '../../features/API/spotifyAdvancedApiSlice';

const AuthRequired = () => {
  const [trigger, result, lastPromise] = useLazyTestAuthQuery();
  return (
    <>
      <Button variant='contained' onClick={() => trigger()}>Show Profile</Button>
      {result.data}
    </>
  )
}

export default AuthRequired