// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, searchUrlSuffix } from './apiConfig'
import { ISearchResult } from '../types/ISearchResult'


// Define a service using a base URL and expected endpoints
export const spotifyBasicApi = createApi({
  reducerPath: 'spotifyBasicApi',
  tagTypes: ['Track', 'Artist', 'Recommendation'],
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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