import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRequiredSearchParams } from '../types/IRecommendationParams'
import { ISearchResult } from '../types/ISearchResult'

const initialState = {
  seedTracks: [],
  seedArtists: [],
  seedGenres: [],
  qs: ""
} as IRequiredSearchParams
const paramCountLimit = 5
const requiredSearchParamsSlice = createSlice({
  name: 'requiredSearchParams',
  initialState,
  reducers: {
    seedTracksUpdated(state, { payload }: PayloadAction<ISearchResult[]>) {
      state.seedTracks = payload.map((t) => t).slice(0, 2);
    },
    seedArtistsUpdated(state, { payload }: PayloadAction<ISearchResult[]>) {
      state.seedArtists = payload.map((a) => a).slice(0, 2);
      const processed = [...payload.map((a) => a.genres?.map(g => g.replaceAll(" ", "-")) ?? []).flat(), ...state.seedGenres]
        .slice(0, paramCountLimit - state.seedTracks.length - state.seedArtists.length)
      state.seedGenres = processed
    },
    seedGenresUpdated(state, { payload }: PayloadAction<string[]>) {
      const processed = [...payload, ...state.seedGenres.map(g => g.replaceAll(" ", "-"))]
        .slice(0, paramCountLimit - state.seedTracks.length - state.seedArtists.length)
      state.seedGenres = processed;
    },
    allUpdated(state, { payload }: PayloadAction<ISearchResult[]>) {
      state.seedTracks = payload.map(t => { return { ...t, images: t.album?.images ?? [] } }).slice(0, 2);
      state.seedArtists = payload.map(t => t.artists?.map(a => a) ?? [])
        .flat().slice(0, 2);
    },
    qsUpdated(state, { payload }: PayloadAction<string>) {
      state.qs = payload;
    },
  },
  selectors: {
    selectSeedTracks: (state) => state.seedTracks,
    selectSeedArtists: (state) => state.seedArtists,
    selectSeedGenres: (state) => state.seedGenres,
    selectQs: (state) => state.qs,
  }
})

export const { seedTracksUpdated, seedArtistsUpdated, seedGenresUpdated, qsUpdated, allUpdated } = requiredSearchParamsSlice.actions
export const { selectSeedTracks, selectSeedArtists, selectSeedGenres, selectQs } = requiredSearchParamsSlice.selectors
export default requiredSearchParamsSlice