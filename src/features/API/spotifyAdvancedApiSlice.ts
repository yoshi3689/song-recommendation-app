// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISearchResult } from '../types/ISearchResult'

const baseUrl = process.env.REACT_APP_SPOTIFY_API_URL_DEV;
// Define a service using a base URL and expected endpoints
export const spotifyAdvancedApi = createApi({
  reducerPath: 'spotifyAdvancedApi',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    testAuth: builder.query<ISearchResult[], void>({
      query: () => `${baseUrl}/api/SpotifyAuth/test_auth`,
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useTestAuthQuery,
  useLazyTestAuthQuery,
} = spotifyAdvancedApi