import sessionSlice from "@features/auth/shared/presentation/store/session/session.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
   reducer: { session: sessionSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;