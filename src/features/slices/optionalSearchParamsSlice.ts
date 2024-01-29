import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IOptionalSearchParams } from '../types/IRecommendationParams'
import { ISearchResult } from '../types/ISearchResult'
import { ISeedArtist } from '../types/ISeedArtist'

const initialState = {
  limit: 10,
  market: "ES",
} as IOptionalSearchParams

const requiredSearchParamsSlice = createSlice({
  name: 'requiredSearchParams',
  initialState,
  reducers: {
    updateOptionalSearchParams(state, { payload }: PayloadAction<IOptionalSearchParams>) {
      state = { ...state, ...payload };
    },
  },
})

export const { updateOptionalSearchParams } = requiredSearchParamsSlice.actions
export default requiredSearchParamsSlice