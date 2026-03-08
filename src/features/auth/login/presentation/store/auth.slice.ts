import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { crearStorage, removerStorage, usarStorage } from "@shared/utilities/localstorage/localstorage.utility";
import type { AuthSession } from "../../domain/auth-session.model";

const STORAGE_KEY = "@auth_session";

interface AuthState {
    session: AuthSession | null;
}

const storedSession = usarStorage<AuthSession>(STORAGE_KEY);

const initialState: AuthState = {
    session: storedSession ?? null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<AuthSession>) => {
            state.session = action.payload;
            crearStorage<AuthSession>(STORAGE_KEY, action.payload);
        },

        clearSession: (state) => {
            state.session = null;
            removerStorage(STORAGE_KEY);
        },
    },
});

export const { setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;