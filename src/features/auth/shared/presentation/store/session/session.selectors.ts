import type { RootState } from "@core/store/redux/store";

export const selectAuthSession = (state: RootState) => state.session;

export const selectIsAuthenticated = (state: RootState) =>
   !!state.session?.isAuthenticated;

export const selectToken = (state: RootState) =>
   state.session?.token ?? "";

export const selectCurrentUser = (state: RootState) =>
   state.session?.user ?? null;

export const selectRol = (state: RootState) =>
   state.session?.user.rol ?? null;

export const selectDocumento = (state: RootState) =>
   state.session?.user.documento ?? "";

export const selectUserId = (state: RootState) =>
   state.session?.user.userId ?? null;

export const selectNombreCompleto = (state: RootState) => {
   const user = state.session?.user;
   return user ? `${user.nombre} ${user.apellidos}` : "";
};