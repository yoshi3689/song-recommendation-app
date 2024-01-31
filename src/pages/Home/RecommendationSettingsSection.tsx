import React, { useState } from 'react'
import Section from '../../components/Section/Section'
import SearchBars from './SearchBars';
import SettingsSearchDetail from './RecommendationCustomSettings';
import { Button, Typography } from '@mui/material';
import { getTrackRecommendations } from '../../features/API/getTrackRecommendations';
import { useDispatch, useSelector } from 'react-redux';
import { selectSeedArtists, selectSeedGenres, selectSeedTracks } from '../../features/slices/requiredSearchParamsSlice';
import { selectAll } from '../../features/slices/optionalSearchParamsSlice';
import { generateQs } from '../../features/utils/generateQs';
import ButtonContained from '../../components/ButtonContained/ButtonContained';
import { useGetRecommendationsQuery } from '../../features/API/spotifyBasicApi';

const SearchSection = () => {

  const seedTracks = useSelector(selectSeedTracks)
  const seedArtists = useSelector(selectSeedArtists)
  const seedGenres = useSelector(selectSeedGenres)
  const customSettings = useSelector(selectAll);
  const [qs, setQs] = useState<string>("");
  const { data } = useGetRecommendationsQuery(qs, { skip: qs === ""})

  const handleClick = () => {
    const qs = generateQs(
      seedTracks.map(t => t.id),
      seedArtists.map(a => a.id),
      seedGenres,
      customSettings
    )
    setQs(qs)
    console.log(data)
  }
  
  
  return (
    <Section sectionTitle='Preferences'>
      <SearchBars />
      <SettingsSearchDetail />
      <Button variant="contained" onClick={handleClick}>
        <Typography color="white">Get Recs!</Typography>
      </Button>
    </Section>
  )
}

export default SearchSection