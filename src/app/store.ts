import { configureStore } from '@reduxjs/toolkit'
import { spotifyBasicApi } from '../features/API/spotifyBasicApi'
import requiredSearchParamsSlice from '../features/slices/requiredSearchParamsSlice'
import optionalSearchParamsSlice from '../features/slices/optionalSearchParamsSlice'

export const store = configureStore({
  reducer: {
    [spotifyBasicApi.reducerPath]: spotifyBasicApi.reducer,
    [requiredSearchParamsSlice.name]: requiredSearchParamsSlice.reducer,
    [optionalSearchParamsSlice.name]: optionalSearchParamsSlice.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyBasicApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch