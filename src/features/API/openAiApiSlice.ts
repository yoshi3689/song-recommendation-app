import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_API_GENRE_FINDER;

// Define a service using a base URL and expected endpoints
export const openAiApiSlice = createApi({
  reducerPath: 'openAiApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchChatCompletions: builder.mutation<string[], string[]>({
      query: (artists) => ({
        url: '/genres/find',
        method: 'POST',
        body: artists,
      }),

    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchChatCompletionsMutation
} = openAiApiSlice