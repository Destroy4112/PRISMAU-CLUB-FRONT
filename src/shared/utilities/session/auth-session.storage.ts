import type { Session } from "@features/auth/shared/domain/models/session.model";
import { usarStorage } from "../../../core/storage/localstorage";

const AUTH_STORAGE_KEY = "@auth_session";

export function getStoredAuthSession(): Session | null {
   return usarStorage<Session>(AUTH_STORAGE_KEY) ?? null;
}

export function getStoredToken(): string | null {
   return getStoredAuthSession()?.token ?? null;
}