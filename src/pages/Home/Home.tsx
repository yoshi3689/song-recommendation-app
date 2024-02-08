import { useEffect } from "react"
import { Box, Container, Typography } from '@mui/material'
import SearchSection from './RecommendationSettingsSection';
import { useRenderRecommendations } from './hooks/useRenderRecommendations';
import AuthRequired from './AuthRequired';
import Login from '../../components/Login/Login';
import { useGetProfileQuery } from "../../features/API/spotifyAdvancedApiSlice";
import Logout from "../../components/Login/Logout";

const Home = () => {
  const renderRecommendations = useRenderRecommendations();
  const { data } = useGetProfileQuery(undefined, {skip: !window.location.search.includes("login=true") });

  return (
    <Container>
      <Box sx={{pt: 3}}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant='h3'>GrooveGuru</Typography>
          <Box>
            {!data ? <Login /> : <Logout username={data.displayName} imgUrl={data.images[0].url} />}
            {/* check if result and cookie are present. If not, display the login */}
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