import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISearchResult } from '../types/ISearchResult'

const searchUrlSuffix = "search?name="

const baseUrl = process.env.REACT_APP_API_SPOTIFY_BASIC
// Define a service using a base URL and expected endpoints
export const spotifyBasicApi = createApi({
  reducerPath: 'spotifyBasicApi',
  tagTypes: ['Track', 'Artist', 'Recommendation'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchTracks: builder.query<ISearchResult[], string>({
      query: (name) => `${baseUrl}/tracks/${searchUrlSuffix}${name}`,
    }),
    searchArtists: builder.query<ISearchResult[], string>({
      query: (name) => `${baseUrl}/artists/${searchUrlSuffix}${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSearchArtistsQuery,
  useLazySearchArtistsQuery,
  useSearchTracksQuery,
  useLazySearchTracksQuery,
} = spotifyBasicApi