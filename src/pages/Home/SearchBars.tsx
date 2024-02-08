import { Box } from '@mui/material'

import SearchBar from '../../components/SearchBar/SearchBar';
import { ISearchResult } from '../../features/types/ISearchResult';
import { useInjectSearchBars } from './hooks/useInjectSearchBars';
import { useLazySearchArtistsQuery, useLazySearchTracksQuery } from '../../features/API/spotifyBasicApiSlice';
import { useSelector } from 'react-redux';

import { selectSeedArtistsError, selectSeedGenresError, selectSeedTracksError } from '../../features/slices/requiredSearchParamsErrorSlice';
import GenreSearch from './GenreSearch';

const SearchBars = () => {
  const { seedArtists, seedTracks, handleUpdateArtists, handleUpdateTracks }
    = useInjectSearchBars();
  const seedTracksError = useSelector(selectSeedTracksError)
  const seedArtistsError = useSelector(selectSeedArtistsError)
  const seedGenresError = useSelector(selectSeedGenresError)
  return (
    <Box>
      <SearchBar<ISearchResult>
        value={seedTracks}
        name={"track-search"}
        barLabel={"Track/Song Name"}
        setValue={handleUpdateTracks}
        error={seedTracksError}
        useLazySearchQuery={useLazySearchTracksQuery}
      />      

      <SearchBar<ISearchResult>
        value={seedArtists}
        name={"artist-search"}
        barLabel={"Artist Name"}
        setValue={handleUpdateArtists}
        error={seedArtistsError}
        useLazySearchQuery={useLazySearchArtistsQuery}
      />      

      {seedGenresError && <GenreSearch artists={seedArtists.map(a => a.name)} />}
      
    </Box>
  )
}

export default SearchBars