import { Button, Avatar, Box, Typography, Tooltip } from '@mui/material'
import { useLogout } from './hooks/useLogout';

interface ILogout {
  username: string;
  imgUrl: string;
}
const Logout = ({ username, imgUrl }: ILogout) => {
  const handleLogout = useLogout();
  // render dialogue when logout is clicked to confirm the disconnection
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