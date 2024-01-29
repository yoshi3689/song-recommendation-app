import { Box, Typography } from '@mui/material'
import React from 'react'
import { PropsWithChildren } from 'react'
import { useLazySearchArtistsQuery } from '../../features/API/spotifyBasicApi';

interface SctionProps {
  sectionTitle: string;
}

const Section = ({ children, sectionTitle }: PropsWithChildren<SctionProps>) => {
  const [artistSearchTrigger, artistSearchResult, artistSearchLastPromiseInfo] = useLazySearchArtistsQuery({
  
  
  });
  const [inputValue, setInputValue] = React.useState('');
  return (
    <Box component={"section"}>
      <Typography variant='h5'>{sectionTitle}</Typography>
      {children}
    </Box>
  )
}

export default Section