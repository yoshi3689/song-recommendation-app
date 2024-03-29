import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Box, Button, Collapse, Tooltip } from '@mui/material';

import { useRenderDetailSettings } from './hooks/useRenderDetailSettings';

const SettingsSearchDetail = () => {
  const {open, setOpen, renderSliders} = useRenderDetailSettings()
  return (
    <Box sx={{ mb: 3 }}>
      <Tooltip title="set detailed search parameters" placement='bottom'>
        <Button variant='text' onClick = {() => setOpen(!open)}>
        Detailed Settings {open? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
      </Tooltip>
    <Collapse in={ open } sx = {{ paddingInline: 2 }}>
      {renderSliders()}
    </Collapse>
    </Box>
  )
}

export default SettingsSearchDetail