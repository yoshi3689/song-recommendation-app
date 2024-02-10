import Section from '../../components/Section/Section'
import SearchBars from './SearchBars';
import SettingsSearchDetail from './RecommendationCustomSettings';
import { Alert, Box, Button, Tooltip, Typography } from '@mui/material';
import { useCompleteSettings } from './hooks/useCompleteSettings';
import { useGetRecommendationsQuery } from '../../features/API/recommendationSlice';
import { selectQs } from '../../features/slices/requiredSearchParamsSlice';
import { useSelector } from 'react-redux';
import { IPlaylist, useCreatePlaylistMutation, useGetProfileQuery, useLazyGetProfileQuery } from '../../features/API/spotifyAdvancedApiSlice';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useSpotifyProfile } from '../../components/Login/hooks/useSpotifyProfile';



const RecommendationSettingsSection = () => {
  const handleFetchRecommndations = useCompleteSettings()
  const qs = useSelector(selectQs)
  console.log(qs)
  
  const { data } = useGetRecommendationsQuery(qs, { skip: qs === "" })
  const profile = useSpotifyProfile();
  const [createPlaylist, { isSuccess }] = useCreatePlaylistMutation();
  console.log(isSuccess)
  const handleSaveAsPlaylist = async() => {
    if (data && profile) {
      // also I need to grab userId
      await createPlaylist({ uris: data?.tracks.map(t => (t as any).uri), userId: profile?.id } as IPlaylist);
      
    }
  }

  // will make it dissappear after a certain time
  // should make it reusable in even the search input error
  // the component will take in 
  // severity, message, onDissappear(some action that should happen when it dissapears)
  const SavePlaylistNotification = (
    <Alert severity='success'>plyalist saved!</Alert>
  )

  const SaveButton = (
    <Tooltip title={profile ? "Save recommendations to your account" : "Requires connection to Spotify account"} placement='top'>
      <Box>
        {isSuccess && SavePlaylistNotification}
        <Button disabled={profile ? false : true} variant="contained" onClick={handleSaveAsPlaylist}>
        <Typography color="white">Save As Playlist</Typography>
      </Button>
      </Box>
    </Tooltip>
  )
  return (
    <Section sectionTitle='Preferences' dialogMessage='This is where you customize settings for song recommendations. Are you a music nerd who knows what you want? You can set numeric parameters to have more control over the result in DETAILED SETTINGS. To save recommendations as a playlist, please connect to spotify account by top right button!'>
      <SearchBars />
      <SettingsSearchDetail />
      <Box display="flex" >
        <Tooltip title="Get song recommendations" placement='top'>
          <Button sx={{mr: 2}} variant="contained" onClick={handleFetchRecommndations}>
            <Typography color="white">Get Recs!</Typography>
          </Button>
        </Tooltip>
        {data && SaveButton}
      </Box>
    </Section>
  )
}

export default RecommendationSettingsSection