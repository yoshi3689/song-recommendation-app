import { Button, CircularProgress, Typography } from '@mui/material'
import { useGetRecommendationsQuery } from '../../../features/API/recommendationSlice';
import { useSelector } from 'react-redux';
import { selectQs } from '../../../features/slices/requiredSearchParamsSlice';
import Section from '../../../components/Section/Section';
import TrackList from '../../../components/TrackList/TrackList';


export const useRenderRecommendations = () => {
  const qs = useSelector(selectQs)
  const { data, isError, error, isLoading } = useGetRecommendationsQuery(qs, { skip: qs === ""})
  return () => {
    let resultToRender;
    if (data && data.tracks.length > 0) resultToRender
      = <>
      <Button>Save as Playlist</Button>
      <TrackList tracks = { data.tracks } />
      </>
    else if (isError && error) {
      resultToRender = <Typography variant="h5">Error</Typography>
    }
    else if (isLoading) resultToRender = <CircularProgress color="inherit" size={50} />
    return data !== undefined &&  (
      <Section sectionTitle="Results">
        {resultToRender}
      </Section>
    )
  }
}