import Home from './pages/Home/Home'
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