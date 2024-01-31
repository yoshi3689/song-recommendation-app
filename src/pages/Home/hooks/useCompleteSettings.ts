import { useDispatch, useSelector } from 'react-redux';
import { qsUpdated, selectSeedArtists, selectSeedGenres, selectSeedTracks } from '../../../features/slices/requiredSearchParamsSlice';
import { selectAll } from '../../../features/slices/optionalSearchParamsSlice';
import { generateQs } from '../../../features/utils/generateQs';

export const useCompleteSettings = () => {
  const dispatch = useDispatch()
  const seedTracks = useSelector(selectSeedTracks)
  const seedArtists = useSelector(selectSeedArtists)
  const seedGenres = useSelector(selectSeedGenres)
  const customSettings = useSelector(selectAll);

  const handleClick = () => {
    const newQs = generateQs(
      seedTracks.map(t => t.id),
      seedArtists.map(a => a.id),
      seedGenres,
      customSettings
    )
    dispatch(qsUpdated(newQs));
  }

  return handleClick
}