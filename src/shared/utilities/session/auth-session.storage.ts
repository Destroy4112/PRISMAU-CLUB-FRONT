import type { AuthSession } from "@features/auth/login/domain/auth-session.model";
import { usarStorage } from "../localstorage/localstorage.utility";

const AUTH_STORAGE_KEY = "@auth_session";

export function getStoredAuthSession(): AuthSession | null {
  return usarStorage<AuthSession>(AUTH_STORAGE_KEY) ?? null;
}

export function getStoredToken(): string | null {
  return getStoredAuthSession()?.token ?? null;
}