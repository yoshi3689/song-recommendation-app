// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IImage, ISearchResult } from '../types/ISearchResult'

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

const baseUrl = process.env.REACT_APP_SPOTIFY_API_URL_DEV;
// Define a service using a base URL and expected endpoints
export const spotifyAdvancedApi = createApi({
  reducerPath: 'spotifyAdvancedApi',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<ISpotifyUser, void>({
      query: () => `${baseUrl}/api/SpotifyAuth/user`,
    }),
    createPlaylist: builder.mutation<IPlaylist, IPlaylist>({
      query: (pl: IPlaylist) => ({
        url: `/api/SpotifyAuth/playlist/create`,
        method: "POST",
        body: {
          ...pl,
          name: "name",
          description: "created by GrroveGuru",
          public: true
        } as IPlaylist,
      })
    })
    ,
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useCreatePlaylistMutation
} = spotifyAdvancedApi