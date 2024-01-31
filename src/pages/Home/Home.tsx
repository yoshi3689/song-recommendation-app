import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import SearchSection from './RecommendationSettingsSection';

const Home = () => {
  const [tracks, setTracks] = React.useState<any[]>([]);
  const [trackOptions, setTrackOptions] = React.useState<readonly any[]>([]);

  const [artists, setArtists] = React.useState<any[]>([]);
  const [artistOptions, setArtistOptions] = React.useState<readonly any[]>([]);

  return (
    <Container>
      <Box sx={{paddingBlock: 3}}>
        <Typography variant='h3' gutterBottom>GrooveGuru</Typography>
      {/* <Typography variant='subtitle1'>Craft Seamless Sets, Elevate Your Mix: Spinfluence</Typography> */}
      <Typography variant='subtitle2' gutterBottom>Unleash the DJ in You with Personalized Recommendations powered by Spotify</Typography>
      </Box>
      <SearchSection />
      
      {/* {recommendations.length > 0 && recommendations ?
        <Section sectionTitle="Results">
        <TrackList tracks={recommendations} />
        </Section>
        : <Typography variant="h5">No Results Found</Typography>
      } */}
      
    </Container>
  )
}

export default Home