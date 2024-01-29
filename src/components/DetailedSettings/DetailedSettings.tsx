import { Box, Button, Collapse } from '@mui/material'
import React from 'react'
import { ArrowDropDown, ArrowDropUp  } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RangeSlider from '../Slider/RangeSlider';

const DetailedSettings = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Box sx={{ mb: 3 }}>
      <Button variant='text' onClick = {() => setOpen(!open)}>
      Detailed Settings {open?<ArrowDropUp /> : <ArrowDropDown />}
    </Button>
    <Collapse in={ open } sx = {{ paddingInline: 2 }}>
      <RangeSlider />
      <RangeSlider />
      <RangeSlider />
    </Collapse>
    </Box>
  )
}

export default DetailedSettings