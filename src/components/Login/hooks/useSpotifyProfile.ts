import { useGetProfileQuery } from '../../../features/API/spotifyAdvancedApiSlice';

export const useSpotifyProfile = () => {
  const { data } = useGetProfileQuery(undefined, { skip: !window.location.search.includes("login=true") });
  return data
}