import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IOptionalSearchParams } from '../../features/types/IRecommendationParams';

function valuetext(value: number) {
  return `${value}°C`;
}

interface ISingleSlider {
  name: string;
  label: string;
  iniitalValue: number | undefined; 
  min: number; 
  max: number; 
  step: number;
  update: ActionCreatorWithPayload<IOptionalSearchParams, "optionalSearchParams/optionalSearchParamsUpdated"|"optionalSearchParams/durationUpdated">

}

const SingleSlider = ({ name, label ,iniitalValue, min, max, step, update }: ISingleSlider) => {
  const handleChange = (event: Event, value: number | number[], activeThumb: number): void => {
    dispatch(update({ [name]:value }));
  }
  const dispatch = useDispatch();
  const marks = [
    { value: min, label: `${min}` },
    { value: max, label: `${max}` },
  ]
  return (
    <Box sx={{mb: 4}}>
      <Typography sx={{mb:2}}>
        {label.replace("target_", "")}
      </Typography>
      <Slider
        aria-label={name}
        defaultValue={iniitalValue ? iniitalValue : (min+max) / 2}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={step}
        marks={marks}
        min={min}
        max={max}
        onChange={handleChange}
      />
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
  );
}

export default SingleSlider