import { Box, Container, Typography } from '@mui/material'
import SearchSection from './RecommendationSettingsSection';
import { useRenderRecommendations } from './hooks/useRenderRecommendations';
import Login from '../../components/Login/Login';
import Logout from "../../components/Login/Logout";
import { useSpotifyProfile } from "../../components/Login/hooks/useSpotifyProfile";

const Home = () => {
  const renderRecommendations = useRenderRecommendations();
  const profile = useSpotifyProfile();

  return (
    <Container>
      <Box sx={{pt: 3}}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant='h3'>GrooveGuru</Typography>
          <Box>
            {!profile ? <Login /> : <Logout username={profile.displayName} imgUrl={profile.images[0].url} />}
          </Box>
        </Box>
      <Typography variant='subtitle2' gutterBottom>Unleash the DJ in You with Personalized Recommendations powered by Spotify</Typography>
      </Box>
      <SearchSection />
      {renderRecommendations()}
    </Container>
  )
}

export default Home