import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

// function valuetext(value: number) {
//   return `${value}%`;
// }

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 100,
    label: '100%',
  },
];

// valuetext
// labelName - getAriaLabel, label
// value
// marks
// handleChange


export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0.20, 0.80]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box >
      <Typography>
        Label Name
      </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext} // change
        marks={marks} 
        step={marks[marks.length - 1].value / 10}
        min={marks[0].value}
        max={marks[marks.length - 1].value}
      />
    </Box>
  );
}