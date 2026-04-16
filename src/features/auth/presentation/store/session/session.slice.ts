import type { Session } from "@features/auth/domain/models/session.model";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { crearStorage, removerStorage, usarStorage } from "@shared/utilities/localstorage/localstorage.utility";

const STORAGE_KEY = "@auth_session";

type SessionState = Session | null;

const storedSession = usarStorage<Session>(STORAGE_KEY);

const initialState: SessionState = storedSession ?? null;

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSession: (_, action: PayloadAction<Session>) => {
            crearStorage<Session>(STORAGE_KEY, action.payload);
            return action.payload;
        },

        clearSession: () => {
            removerStorage(STORAGE_KEY);
            return null;
        },
    },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;