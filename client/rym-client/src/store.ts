import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./features/charactersSlice";
import userSlice from "./features/userSlice";
import favoritesSlice from "./features/favoritesSlice";
import characterDetailSlice from "./features/charDetailSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        user: userSlice,
        favorites: favoritesSlice,
        characterDetail: characterDetailSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;