import React from 'react'
import Section from './Section'
import SearchBars from '../SearchBar/SearchBars';
import DetailedSettings from '../DetailedSettings/DetailedSettings';
import { Button, Typography } from '@mui/material';
import { getTrackRecommendations } from '../../features/API/getTrackRecommendations';

const SearchSection = () => {
  const [genres, setGenres] = React.useState<readonly string[]>([]);

  const [recommendations, setRecommendations] = React.useState<any[]>([]);
  const fetchAndSetRecs = async () => {
    const qsConnector: string = "%2C"
    const qs = {
      limit: "10",
      market: "ES",
      // seed_tracks: tracks.map(t => t.id).join(qsConnector),
      // seed_artists: artists.map(t => t.id).join(qsConnector),
      seed_genres: genres.join(qsConnector),
    }

    const generateQs = Object.entries(qs);
    const formattedQs = generateQs.map(e => e[0] + "=" + e[1]).join("&")
    console.log(formattedQs)
    const recs = await getTrackRecommendations(formattedQs)
    console.log(recs)
    setRecommendations(recs.tracks);
  }
  return (
    <Section sectionTitle='Preferences'>
      <SearchBars />
      <DetailedSettings />

      <Button variant="contained" onClick={fetchAndSetRecs}>
        <Typography color="white">get recs!</Typography>
      </Button>
    </Section>
  )
}

export default SearchSection