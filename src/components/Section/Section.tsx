import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from 'react';

interface ISectionProps {
  sectionTitle: string;
  dialogMessage: string;
}

interface IDialogProps {
  open: boolean;
  handleClose: () => void;
  message: string;
  title: string;
}

const InfoBox = ({ open, handleClose, message, title }:IDialogProps) => {
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  )
}

const Section = ({ children, sectionTitle, dialogMessage }: PropsWithChildren<ISectionProps>) => {  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box component={"section"} sx={{pt: 3}}>
      <Box display="flex" >
        <Typography variant='h5'>{sectionTitle}</Typography>
        <IconButton size='small' onClick={handleClickOpen}><InfoOutlinedIcon fontSize='small' /></IconButton>
        <InfoBox open={open} handleClose={handleClose} title={sectionTitle} message={dialogMessage} />
      </Box>
      {children}
    </Box>
  )
}

export default Section