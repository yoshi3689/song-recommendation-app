import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IImage } from '../types/ISearchResult'
import { isDevelopment } from '../utils/isDevelopment'

interface IExternalUrl {
  spotify: string
}

interface IFollowers {
  href: string
  total: number
}

interface ISpotifyUser {
  country?: string
  displayName: string
  email?: string
  externalUrls: IExternalUrl
  followers: IFollowers
  href: string
  id: string
  images: IImage[]
  product?: string
  type: string
  uri: string
}

export interface IPlaylist {
  name?: string
  public?: boolean
  description?: string
  uris: string[]
  userId: string
}


const baseUrl = isDevelopment() ? "http://localhost:5000/api/SpotifyAuth" : process.env.REACT_APP_API_SPOTIFY_AUTH
// Define a service using a base URL and expected endpoints
export const spotifyAdvancedApi = createApi({
  reducerPath: 'spotifyAdvancedApi',
  tagTypes: ['Profile', 'Playlist'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders(headers) {
      return headers
    },
    credentials: 'include'    
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<ISpotifyUser, void>({
      query: () => `${baseUrl}/user`,
      providesTags: ['Profile']
    }),
    logout: builder.query<string, void>({
      query: () => `${baseUrl}/logout`,
    }),
    createPlaylist: builder.mutation<IPlaylist, IPlaylist>({
      query: (pl: IPlaylist) => ({
        url: `/playlist/create`,
        method: "POST",
        body: {
          ...pl,
          name: "name",
          description: "created by GrroveGuru",
          public: true
        } as IPlaylist,
      }),
      invalidatesTags: ['Playlist']
    })
    ,
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useLogoutQuery,
  useLazyLogoutQuery,
  useCreatePlaylistMutation
} = spotifyAdvancedApi

export const invalidateProfileCache = () => {
  // Perform logout logic...
  // Invalidate cache for getProfile query
  spotifyAdvancedApi.util.invalidateTags(['Profile']);
};