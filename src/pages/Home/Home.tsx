import { Box, Container, Typography } from '@mui/material'
import SearchSection from './RecommendationSettingsSection';
import { useRenderRecommendations } from './hooks/useRenderRecommendations';
import Login from '../../components/Login/Login';
import Logout from "../../components/Login/Logout";
import { useSpotifyProfile } from "../../components/Login/hooks/useSpotifyProfile";
import { isMobile } from 'react-device-detect'; 

const Home = () => {
  const renderRecommendations = useRenderRecommendations();
  const user = useSpotifyProfile();

  return (
    <Container>
      <Box sx={{ pt: 3 }}>
        <Box alignItems="center" display={isMobile ? "block" : "flex"} justifyContent="space-between">
          <Typography variant='h3'>GrooveGuru</Typography>
          <Box sx={{ mb: 2 }}>
            {!user ? <Login /> : <Logout username={user.profile.displayName} imgUrl={user.profile.images[0].url} />}
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