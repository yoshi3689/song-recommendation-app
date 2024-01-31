import { Box, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

interface SectionProps {
  sectionTitle: string;
}

const Section = ({ children, sectionTitle }: PropsWithChildren<SectionProps>) => {  
  return (
    <Box component={"section"} sx={{pt: 3}}>
      <Typography variant='h5'>{sectionTitle}</Typography>
      {children}
    </Box>
  )
}

export default Section