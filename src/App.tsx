import React from 'react'
import Home from './pages/Home'
import { searchTracks } from './features/API/searchTracks'
import { searchArtists } from './features/API/searchArtists'
import { getTrackRecommendations } from './features/API/getTrackRecommendations'
import Section from './components/Section/Section'
import { render } from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#1DB954'
    }
  },

});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
      <Home />
    </main>
    </ThemeProvider>
  )
}

export default App