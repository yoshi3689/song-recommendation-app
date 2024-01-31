import { Button, Typography } from '@mui/material'
import React, { MouseEventHandler } from 'react'

interface IButtonContained {
  handleClick: MouseEventHandler<HTMLAnchorElement>
  innerText: string
}

const ButtonContained = ({handleClick, innerText}: IButtonContained) => {

  return (
    <Button variant="contained">
      <Typography color="white">{innerText}</Typography>
    </Button>
  )
}

export default ButtonContained