import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { searchTracks } from '../../features/API/searchTracks';

import SearchBar from '../../components/SearchBar/SearchBar';
import { ISearchResult } from '../../features/types/ISearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { allUpdated, seedArtistsUpdated, selectSeedArtists, selectSeedGenres, selectSeedTracks } from '../../features/slices/requiredSearchParamsSlice';
import { useLazySearchArtistsQuery, useLazySearchTracksQuery, useSearchArtistsQuery } from '../../features/API/spotifyBasicApi';

const SearchBars = () => {
  const dispatch = useDispatch()

  const seedArtists = useSelector(selectSeedArtists)
  const seedTracks = useSelector(selectSeedTracks)
  // const seedGenres = useSelector(selectSeedGenres)

  const handleUpdateTracks = (valueArr: (ISearchResult)[]) => {
    dispatch(allUpdated(valueArr));
  }

  const handleUpdateArtists = (valueArr: (ISearchResult)[]) => {
    dispatch(seedArtistsUpdated(valueArr));
  }
  return (
    <Box>
      <SearchBar<ISearchResult>
        value={seedTracks}
        name={"track-search"}
        barLabel={"Track/Song Name"}
        setValue={handleUpdateTracks}
        useLazySearchQuery={useLazySearchTracksQuery}
      />      

      <SearchBar<ISearchResult>
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