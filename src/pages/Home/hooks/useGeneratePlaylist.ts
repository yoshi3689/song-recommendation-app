import { IPlaylist, ISpotifyUser, useCreatePlaylistMutation, useGetProfileQuery, useLazyGetProfileQuery } from "../../../features/API/spotifyAdvancedApiSlice";
import { IRecommendation } from "../../../features/types/IRecommendation";

export const useGeneratePlaylist = (data: IRecommendation | undefined, profile: ISpotifyUser | undefined ) => {
  const [createPlaylist, { isSuccess, isError }] = useCreatePlaylistMutation();

  const handleSaveAsPlaylist = async () => {
    if (data && profile) {
      // also I need to grab userId
      const playlistCreateReq = { uris: data?.tracks.map(t => (t as any).uri), userId: profile?.id } as IPlaylist
      console.log(playlistCreateReq)
      const res = await createPlaylist(playlistCreateReq);
      
    }
  }
  return { handleSaveAsPlaylist, isSuccess, isError }
}