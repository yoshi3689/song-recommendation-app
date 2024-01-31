import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISearchResult } from '../types/ISearchResult'
import { spotifyBasicApi } from './spotifyBasicApiSlice'
import { IRecommendation } from '../types/IRecommendation'

// extended slice
const initialState = {
  seeds: [],
  tracks: []
} as IRecommendation

export const extendedApiSlice = spotifyBasicApi.injectEndpoints({
  endpoints: builder => ({
    getRecommendations: builder.query<IRecommendation, string>({
      query: (qs) => `/recommendations?${qs}`,
    }),
  })
})

export const {
  useGetRecommendationsQuery,
  useLazyGetRecommendationsQuery
} = extendedApiSlice

// probs have to use an adapter to make the predefined selectors like how Dave does it
// export const selectRecommendationResult = extendedApiSlice.endpoints.getRecommendations.select()

// const selectRecommendationsData = createSelector(
//   selectRecommendationResult,
//   recommendations => recommendations.data
// )

