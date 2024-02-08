import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IRequiredSearchParamsError {
  seedTracksError: string,
  seedArtistsError: string,
  seedGenresError: string,
}

const initialState = {
  seedTracksError: "",
  seedArtistsError: "",
  seedGenresError: "",
} as IRequiredSearchParamsError

const requiredSearchParamsErrorSlice = createSlice({
  name: 'requiredSearchParamsError',
  initialState,
  reducers: {
    seedTracksErrorUpdated(state, { payload }: PayloadAction<string>) {
      state.seedTracksError = payload
    },
    seedArtistsErrorUpdated(state, { payload }: PayloadAction<string>) {
      state.seedArtistsError = payload
    },
    seedGenresErrorUpdated(state, { payload }: PayloadAction<string>) {
      state.seedGenresError = payload
    },
  },
  selectors: {
    selectSeedTracksError: (state) => state.seedTracksError,
    selectSeedArtistsError: (state) => state.seedArtistsError,
    selectSeedGenresError: (state) => state.seedGenresError,
  }
})

export const { seedTracksErrorUpdated, seedArtistsErrorUpdated, seedGenresErrorUpdated } = requiredSearchParamsErrorSlice.actions
export const { selectSeedTracksError, selectSeedArtistsError, selectSeedGenresError } = requiredSearchParamsErrorSlice.selectors
export default requiredSearchParamsErrorSlice