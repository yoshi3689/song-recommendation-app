import { configureStore } from '@reduxjs/toolkit'
import { spotifyBasicApi } from '../features/API/spotifyBasicApiSlice'
import requiredSearchParamsSlice from '../features/slices/requiredSearchParamsSlice'
import optionalSearchParamsSlice from '../features/slices/optionalSearchParamsSlice'
import { openAiApiSlice } from '../features/API/openAiApiSlice'
import { spotifyAdvancedApi } from '../features/API/spotifyAdvancedApiSlice'
import requiredSearchParamsErrorSlice from '../features/slices/requiredSearchParamsErrorSlice'

export const store = configureStore({
  reducer: {
    [requiredSearchParamsSlice.name]: requiredSearchParamsSlice.reducer,
    [requiredSearchParamsErrorSlice.name]: requiredSearchParamsErrorSlice.reducer,
    [optionalSearchParamsSlice.name]: optionalSearchParamsSlice.reducer,
    [spotifyBasicApi.reducerPath]: spotifyBasicApi.reducer,
    [openAiApiSlice.reducerPath]: openAiApiSlice.reducer,
    [spotifyAdvancedApi.reducerPath]: spotifyAdvancedApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    spotifyBasicApi.middleware,
    openAiApiSlice.middleware,
    spotifyAdvancedApi.middleware
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch