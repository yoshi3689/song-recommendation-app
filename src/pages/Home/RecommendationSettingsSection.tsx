import Section from '../../components/Section/Section'
import SearchBars from './SearchBars';
import SettingsSearchDetail from './RecommendationCustomSettings';
import { Alert, Box, Button, Tooltip, Typography } from '@mui/material';
import { useCompleteSettings } from './hooks/useCompleteSettings';
import { useSpotifyProfile } from '../../components/Login/hooks/useSpotifyProfile';
import { useGeneratePlaylist } from './hooks/useGeneratePlaylist';
import { useFetchRecommendations } from './hooks/useFetchRecommendations';

const RecommendationSettingsSection = () => {
  const handleGenerateQs = useCompleteSettings()

  // recommendation query is invoked when a valid query string is generated
  const { data } = useFetchRecommendations()
  const profile = useSpotifyProfile();
  const { handleSaveAsPlaylist, isSuccess } = useGeneratePlaylist(data, profile?.profile)

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
          <Button sx={{mr: 2}} variant="contained" onClick={handleGenerateQs}>
            <Typography color="white">Get Recommendations</Typography>
          </Button>
        </Tooltip>
        {data && SaveButton}
        {isSuccess && SavePlaylistNotification}
      </Box>
    </Section>
  )
}

export default RecommendationSettingsSection