import { useDispatch, useSelector } from 'react-redux';
import { seedGenresUpdated, selectSeedArtists, selectSeedGenres, selectSeedTracks, qsUpdated } from '../../../features/slices/requiredSearchParamsSlice';
import { selectAll } from '../../../features/slices/optionalSearchParamsSlice';
import { generateQs } from '../../../features/utils/generateQs';
import { generateChatCompletionprompt } from '../../../features/utils/generateChatCompletionprompt';
import { useFetchChatCompletionsMutation } from '../../../features/API/openAiApiSlice';
import { seedArtistsErrorUpdated, seedGenresErrorUpdated, seedTracksErrorUpdated } from '../../../features/slices/requiredSearchParamsErrorSlice';
import { APIError } from 'openai/error';

export const useCompleteSettings = () => {
  const dispatch = useDispatch()
  const seedTracks = useSelector(selectSeedTracks)
  const seedArtists = useSelector(selectSeedArtists)
  const seedGenres = useSelector(selectSeedGenres)
  const customSettings = useSelector(selectAll);
  const [fetchChatCompletions] = useFetchChatCompletionsMutation();
  const discoverGenreTags= async () => {
    // generate input prompt for the search completion AI 
    const promptInput = generateChatCompletionprompt(seedArtists.map(a => a.name));

    // use the mutation function to get the tags
    const res = await fetchChatCompletions(promptInput);
    // Check if the response is successful
    if ('data' in res) {
      // Extract and return the data
      dispatch(seedGenresUpdated(res.data));
      dispatch(seedGenresErrorUpdated(""));
    } else {
      let message: string = ""
      if ('status' in res.error) {
        // Handle FetchBaseQueryError
        message = 'FetchBaseQueryError:' + (res.error.data as APIError).message
      } else {
        // Handle SerializedError
        message = "SerializedError:" + res.error.message;
      }
      console.error(message);
      dispatch(seedGenresErrorUpdated("Genre detection failed. Please manually select genre tags"))
      return;
    }
  }
  const handleClick = async () => {
    // cehck if track and artists are no empty
    const trackUnselected = seedTracks.length === 0
    const artistUnselected = seedArtists.length === 0
    dispatch(seedTracksErrorUpdated(trackUnselected ? "Need at least 1 track/song name!" : ""))
    dispatch(seedArtistsErrorUpdated(artistUnselected ? "Need at least 1 artist name!" : ""))
    if (trackUnselected || artistUnselected) return

    if (seedGenres.length === 0) await discoverGenreTags() 
    else dispatch(seedGenresErrorUpdated(""))

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