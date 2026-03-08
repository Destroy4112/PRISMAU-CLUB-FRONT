import type { RootState } from "@core/store/redux/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectAuthSession = (state: RootState) => state.auth.session;

export const selectIsAuthenticated = (state: RootState) =>
    !!state.auth.session?.isAuthenticated;

export const selectToken = (state: RootState) =>
    state.auth.session?.token ?? "";

export const selectCurrentUser = (state: RootState) =>
    state.auth.session?.user ?? null;

export const selectRol = (state: RootState) =>
    state.auth.session?.user.rol ?? null;

export const selectDocumento = (state: RootState) =>
    state.auth.session?.user.documento ?? "";

export const selectUserId = (state: RootState) =>
    state.auth.session?.user.userId ?? null;

export const selectNombreCompleto = (state: RootState) => {
    const user = state.auth.session?.user;
    return user ? `${user.nombre} ${user.apellidos}` : "";
};