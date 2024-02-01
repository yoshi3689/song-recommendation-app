import { Grid } from '@mui/material'
import TrackCard from './TrackCard/TrackCard';

interface ITrackListProps {
  tracks: any[];
}

const TrackList = ({ tracks }:ITrackListProps) => {
  return (
      <Grid container spacing={3} >
        {tracks.map(track => (
          <Grid xs={6} sm={4} md={3} lg={2} item>
            <TrackCard track={track} />
          </Grid>
        ))}
      </Grid>
  )
}

export default TrackList