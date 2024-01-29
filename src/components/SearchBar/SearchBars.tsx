import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { searchTracks } from '../../features/API/searchTracks';

import SearchBar from './SearchBar';
import { ISeedTrack } from '../../features/types/ISeedTrack';
import { useDispatch, useSelector } from 'react-redux';
import { allUpdated, seedArtistsUpdated, selectSeedArtists, selectSeedGenres, selectSeedTracks } from '../../features/slices/requiredSearchParamsSlice';
import { useLazySearchArtistsQuery, useLazySearchTracksQuery, useSearchArtistsQuery } from '../../features/API/spotifyBasicApi';
import { ISeedArtist } from '../../features/types/ISeedArtist';

const SearchBars = () => {
  const dispatch = useDispatch()

  const seedArtists = useSelector(selectSeedArtists)
  const seedTracks = useSelector(selectSeedTracks)
  const seedGenres = useSelector(selectSeedGenres)

  console.log(seedArtists, seedGenres, seedTracks)

  const handleUpdateTracks = (valueArr: ISeedTrack[]) => {
    dispatch(allUpdated(valueArr));
  }

  const handleUpdateArtists = (valueArr: ISeedArtist[]) => {
    dispatch(seedArtistsUpdated(valueArr));
  }
  return (
    <Box>
      <SearchBar<ISeedTrack>
        value={seedTracks}
        name={"track-search"}
        barLabel={"Track/Song Name"}
        setValue={handleUpdateTracks}
        useLazySearchQuery={useLazySearchTracksQuery}
      />      

      <SearchBar<ISeedArtist>
        value={seedArtists}
        name={"artist-search"}
        barLabel={"Artist Name"}
        setValue={handleUpdateArtists}
        useLazySearchQuery={useLazySearchArtistsQuery}
      />      
    </Box>
  )
}

export default SearchBars