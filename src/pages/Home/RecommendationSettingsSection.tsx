import Section from '../../components/Section/Section'
import SearchBars from './SearchBars';
import SettingsSearchDetail from './RecommendationCustomSettings';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useCompleteSettings } from './hooks/useCompleteSettings';
import { useGetRecommendationsQuery } from '../../features/API/recommendationSlice';
import { selectQs } from '../../features/slices/requiredSearchParamsSlice';
import { useSelector } from 'react-redux';
import { IPlaylist, useCreatePlaylistMutation, useGetProfileQuery } from '../../features/API/spotifyAdvancedApiSlice';
import SaveAltIcon from '@mui/icons-material/SaveAlt';



const RecommendationSettingsSection = () => {
  const handleFetchRecommndations = useCompleteSettings()
  const qs = useSelector(selectQs)
  const { data } = useGetRecommendationsQuery(qs, { skip: qs === "" })
  const res = useGetProfileQuery();

  const [createPlaylist] = useCreatePlaylistMutation();
  
  const handleSaveAsPlaylist = () => {
    if (data && res.data) {
      // also I need to grab userId
      createPlaylist({uris: data?.tracks.map(t => (t as any).uri), userId: res.data?.id} as IPlaylist);
    }
  }
  
  return (
    <Section sectionTitle='Preferences' dialogMessage='This is where you customize settings for song recommendations. Are you a music nerd who knows what you want? You can set numeric parameters to have more control over the result in DETAILED SETTINGS'>
      <SearchBars />
      <SettingsSearchDetail />
      <Box>
        <Tooltip title="Get song recommendations" placement='top'>
          <Button sx={{mr: 2}} variant="contained" onClick={handleFetchRecommndations}>
            <Typography color="white">Get Recs!</Typography>
          </Button>
        </Tooltip>
        {data && 
          <Tooltip title="Save recommendations to your account" placement='top'>
            <Button variant="contained" onClick={handleSaveAsPlaylist}>
              <Typography color="white">Save As Playlist</Typography>
            </Button>
          </Tooltip>
        }

      </Box>
    </Section>
  )
}

export default RecommendationSettingsSection