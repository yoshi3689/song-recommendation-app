import { Box, Button, Container, Typography } from '@mui/material'
import SearchSection from './RecommendationSettingsSection';
import { useRenderRecommendations } from './hooks/useRenderRecommendations';
import AuthRequired from './AuthRequired';
import Login from '../../components/Login/Login';

const Home = () => {
  const renderRecommendations = useRenderRecommendations();
  
  return (
    <Container>
      <Box sx={{pt: 3}}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant='h3'>GrooveGuru</Typography>
          <Box>
            <Login />
            <AuthRequired />
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