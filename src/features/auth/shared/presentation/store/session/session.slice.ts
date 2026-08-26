import { crearStorage, removerStorage, usarStorage } from "@core/storage/localstorage";
import type { Session } from "@features/auth/shared/domain/models/session.model";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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