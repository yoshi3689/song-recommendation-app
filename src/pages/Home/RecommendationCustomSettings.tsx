import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Box, Button, Collapse } from '@mui/material';
import React from 'react'
import RangeSlider from '../../components/Slider/RangeSlider';
import { durationUpdated, initialState, optionalSearchParamsUpdated, selectAll } from '../../features/slices/optionalSearchParamsSlice';
import SingleSlider from '../../components/Slider/SingleSlider';
import { useSelector } from 'react-redux';

const SettingsSearchDetail = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const optionalParams = useSelector(selectAll)
  
  const renderSliders = () => 
    Object.entries(initialState).map(([key, value]) => {
        switch (key) {
          case "limit":
            return <SingleSlider key={key} name={key} label={key} iniitalValue={value} min={value} max={50} step={10} update={optionalSearchParamsUpdated} />  
          case "target_duration_ms":
            return <SingleSlider key={key} name={key} label={key.replace("_ms", "(min)")} iniitalValue={value} min={0} max={10} step={0.5} update={durationUpdated}/>  
          case "target_key":
            return <SingleSlider key={key} name={key} label={key} iniitalValue={value} min={0} max={11} step={1} update={optionalSearchParamsUpdated}/>  
          case "target_tempo":
            return <SingleSlider key={key} name={key} label={key+"/BPM"} iniitalValue={value} min={60} max={180} step={5} update={optionalSearchParamsUpdated}/>  
          default:
            return <SingleSlider key={key} name={key} label={key} iniitalValue={value} min={10} max={100} step={5} update={optionalSearchParamsUpdated}/>  
        }
    }
    )
  return (
    <Box sx={{ mb: 3 }}>
      <Button variant='text' onClick = {() => setOpen(!open)}>
        Detailed Settings {open?<ArrowDropUp /> : <ArrowDropDown />}
      </Button>
    <Collapse in={ open } sx = {{ paddingInline: 2 }}>
      {renderSliders()}
    </Collapse>
    </Box>
  )
}

export default SettingsSearchDetail