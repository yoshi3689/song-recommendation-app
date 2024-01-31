import Section from '../../components/Section/Section'
import SearchBars from './SearchBars';
import SettingsSearchDetail from './RecommendationCustomSettings';
import { Button, Typography } from '@mui/material';
import { useCompleteSettings } from './hooks/useCompleteSettings';


const RecommendationSettingsSection = () => {
  const handleClick = useCompleteSettings()
  
  return (
    <Section sectionTitle='Preferences'>
      <SearchBars />
      <SettingsSearchDetail />
      <Button variant="contained" onClick={handleClick}>
        <Typography color="white">Get Recs!</Typography>
      </Button>
    </Section>
  )
}

export default RecommendationSettingsSection