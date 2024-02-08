import { CircularProgress, Typography } from '@mui/material'
import { useGetRecommendationsQuery } from '../../../features/API/recommendationSlice';
import { useSelector } from 'react-redux';
import { selectQs } from '../../../features/slices/requiredSearchParamsSlice';
import Section from '../../../components/Section/Section';
import TrackList from '../../../components/TrackList/TrackList';


export const useRenderRecommendations = () => {
  const qs = useSelector(selectQs)
  const { data, isError, error, isFetching } = useGetRecommendationsQuery(qs, { skip: qs === ""})
  return () => {
    let resultToRender;
    if (data && data.tracks.length > 0) resultToRender
      = <>
      <TrackList tracks = { data.tracks } />
      </>
    else if (isError && error) {
      resultToRender = <Typography variant="h5">Error</Typography>
    }
    else if (isFetching) resultToRender = <CircularProgress color="inherit" size={50} />
    return data !== undefined &&  (
      <Section
        sectionTitle="Results"
        dialogMessage='Shows recommended songs for you! Clicking on the recoomendation button does not get you a new set of songs? Try adding/changing tracks, artists, and detail settings!'
      >
        {resultToRender}
      </Section>
    )
  }
}