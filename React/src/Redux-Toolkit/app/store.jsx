import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/todoSlice"
import { pokemonApi } from '../services/newapi'
import { pokemonApi2 } from '../services/new2api'

export const store = configureStore({
    // reducer: todoReducer
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [pokemonApi2.reducerPath]: pokemonApi2.reducer,
        baba: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([pokemonApi.middleware,pokemonApi2.middleware]),
})
// here configureStore takes the object in it