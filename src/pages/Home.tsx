import { Box, Button, Collapse, Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import { searchTracks } from '../features/API/searchTracks';
import { searchArtists } from '../features/API/searchArtists';
import { getTrackRecommendations } from '../features/API/getTrackRecommendations';


import Section from '../components/Section/Section';
import TrackList from '../components/TrackList/TrackList';
import DetailedSettings from '../components/DetailedSettings/DetailedSettings';
import { ISearchResult } from '../features/types/ISearchResult';
import SearchBarGeneric from '../components/SearchBar/SearchBar';
import { ISeedArtist } from '../features/types/ISeedArtist';
import { ISeedTrack } from '../features/types/ISeedTrack';
import SearchSection from '../components/Section/SearchSection';

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