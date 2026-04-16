import type { Session } from "@features/auth/domain/models/session.model";
import { usarStorage } from "../localstorage/localstorage.utility";

const AUTH_STORAGE_KEY = "@auth_session";

export function getStoredAuthSession(): Session | null {
    return usarStorage<Session>(AUTH_STORAGE_KEY) ?? null;
}

export function getStoredToken(): string | null {
    return getStoredAuthSession()?.token ?? null;
}