import { Box } from '@mui/material'

import SearchBar from '../../components/SearchBar/SearchBar';
import { ISearchResult } from '../../features/types/ISearchResult';
import { useInjectSearchBars } from './hooks/useInjectSearchBars';
import { useLazySearchArtistsQuery, useLazySearchTracksQuery } from '../../features/API/spotifyBasicApiSlice';
import GenreSearch from './GenreSearch';


const SearchBars = () => {
  const {seedArtists, seedTracks, handleUpdateArtists, handleUpdateTracks}
    = useInjectSearchBars()

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

      {seedArtists.length > 0 && <GenreSearch artists={seedArtists.map(a => a.name)} />}
      
    </Box>
  )
}

export default SearchBars