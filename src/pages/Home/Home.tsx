import { Box, Container, Typography } from '@mui/material'
import SearchSection from './RecommendationSettingsSection';
import { useRenderRecommendations } from './hooks/useRenderRecommendations';

const Home = () => {
  const renderRecommendations = useRenderRecommendations();
  const tracks: any[] = ["1", "2"];
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

{/* <Grid container spacing={3} >
        {tracks.map(track => (
          <Grid xs={6} item>
            <TrackCard track={track} />
          </Grid>
        ))}
      </Grid> */}

export default Home