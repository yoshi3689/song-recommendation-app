import { Box, CircularProgress, Container, Typography } from '@mui/material'
import SearchSection from './RecommendationSettingsSection';
import { useRenderRecommendations } from './hooks/useRenderRecommendations';


const Home = () => {
  const renderRecommendations = useRenderRecommendations();
  return (
    <Container>
      <Box sx={{pt: 3}}>
        <Typography variant='h3' gutterBottom>GrooveGuru</Typography>
      <Typography variant='subtitle2' gutterBottom>Unleash the DJ in You with Personalized Recommendations powered by Spotify</Typography>
      </Box>
      <SearchSection />
      {renderRecommendations()}
    </Container>
  )
}

export default Home