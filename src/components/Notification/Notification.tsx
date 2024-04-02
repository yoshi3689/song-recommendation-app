import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Alert, AlertProps, Box, IconButton, Snackbar, Typography } from '@mui/material';
interface notificationProps {
  message: string
  severity: AlertProps["severity"]
  onClose: () => void
}
const NotificationPopup = ({ message, severity, onClose }: notificationProps) => {
  return (
    <Alert sx={{ mt: 2 }} severity={severity} closeText='Close'>
      <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"cetner"}}>
      <Typography>{message}</Typography>
      </Box>
      </Alert>
    // <Snackbar
    //   open={true}
    //   onClose={onClose}
    //   autoHideDuration={6000}
    // >
      
    // </Snackbar>
  )
}

export default NotificationPopup