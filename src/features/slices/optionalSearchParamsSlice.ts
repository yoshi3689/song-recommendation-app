import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOptionalSearchParams } from '../types/IRecommendationParams'

export const initialState: IOptionalSearchParams = {
  limit: 10, // Default value for limit
  target_duration_ms: undefined,
  target_tempo: undefined,
  target_key: undefined,
  target_acousticness: undefined,
  target_danceability: undefined,
  
  target_energy: undefined,
  target_instrumentalness: undefined,
  target_popularity: undefined,
  target_speechiness: undefined,
};

const optionalSearchParamsSlice = createSlice({
  name: 'optionalSearchParams',
  initialState,
  reducers: {
    optionalSearchParamsUpdated(state, { payload }: PayloadAction<IOptionalSearchParams>) {
      return { ...state, ...payload };
    },
    durationUpdated(state, { payload }: PayloadAction<IOptionalSearchParams>) {
      return { ...state, target_duration_ms: payload.target_duration_ms ? payload.target_duration_ms * 60000 : undefined};
    },
  },
  selectors: {
    selectAll: state => state
  }
})

export const { optionalSearchParamsUpdated, durationUpdated } = optionalSearchParamsSlice.actions
export const { selectAll } = optionalSearchParamsSlice.selectors
export default optionalSearchParamsSlice