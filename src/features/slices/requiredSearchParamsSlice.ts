import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRequiredSearchParams } from '../types/IRecommendationParams'
import { ISearchResult } from '../types/ISearchResult'
import { ISeedArtist } from '../types/ISeedArtist'

const initialState = {
  seedTracks: [],
  seedArtists: [],
  seedGenres: [],
} as IRequiredSearchParams

const requiredSearchParamsSlice = createSlice({
  name: 'requiredSearchParams',
  initialState,
  reducers: {
    seedTracksUpdated(state, { payload }: PayloadAction<ISearchResult[]>) {
      state.seedTracks = payload.map((t) => t).slice(0, 5);
    },
    seedArtistsUpdated(state, { payload }: PayloadAction<ISeedArtist[]>) {
      state.seedArtists = payload.map((a) => a).slice(0, 5);
      console.log(payload)
      state.seedGenres = payload.map((a) => a.genres?.map(g => g)).flat().slice(0, 5);
    },
    seedGenresUpdated(state, { payload }: PayloadAction<string[]>) {
      state.seedGenres = payload.map(g => g).slice(0, 5);
    },
    allUpdated(state, { payload }: PayloadAction<ISearchResult[]>) {
      console.log(payload)
      state.seedTracks = payload.map(t => { return { ...t, images: t.album.images } }).slice(0, 5);
      
      state.seedArtists = payload.map(t => t.artists.map(a => a)).flat().filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.id === value.id))).slice(0, 5);
      // TODO: get genres by making API request on each artist retrieved from a track
      // state.seedGenres = payload.map(t => t.artists.map(a => a.genres.map(g => g))).flat(2).slice(0, 5)
    },
  },
  selectors: {
    selectSeedTracks: (state) => state.seedTracks,
    selectSeedArtists: (state) => state.seedArtists,
    selectSeedGenres: (state) => state.seedGenres,
  }
})

export const { seedTracksUpdated, seedArtistsUpdated, seedGenresUpdated, allUpdated } = requiredSearchParamsSlice.actions
export const { selectSeedTracks, selectSeedArtists, selectSeedGenres } = requiredSearchParamsSlice.selectors
export default requiredSearchParamsSlice