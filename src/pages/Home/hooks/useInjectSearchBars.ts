import { useDispatch, useSelector } from 'react-redux';
import { allUpdated, seedArtistsUpdated, selectSeedArtists, selectSeedTracks } from '../../../features/slices/requiredSearchParamsSlice';
import { ISearchResult } from '../../../features/types/ISearchResult';

export const useInjectSearchBars = () => {
  const seedArtists = useSelector(selectSeedArtists)
  const seedTracks = useSelector(selectSeedTracks)
  // const seedGenres = useSelector(selectSeedGenres)

  const dispatch = useDispatch()
  const handleUpdateTracks = (valueArr: (ISearchResult)[]) => {
    dispatch(allUpdated(valueArr));
  }

  const handleUpdateArtists = (valueArr: (ISearchResult)[]) => {
    dispatch(seedArtistsUpdated(valueArr));
  }

  return { seedArtists, seedTracks, handleUpdateArtists, handleUpdateTracks }
}