import { configureStore } from "@reduxjs/toolkit";
import credencialesSlice from "./slices/credenciales.slice";
import userSlice from "./slices/user.slice";

export const store = configureStore({
    reducer: {
        credenciales: credencialesSlice,
        user: userSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;