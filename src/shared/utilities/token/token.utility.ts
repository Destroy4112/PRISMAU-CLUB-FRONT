import { jwtDecode } from "jwt-decode";
import { alertOk } from "../alerts/alertas.utility";
import { cerrarSesionAutomatica } from "../logout/logout.utility";
import { getStoredToken } from "../session/auth-session.storage";

export const isTokenExpired = (token: string): boolean => {
   if (!token) return true;

   try {
      const decoded: { exp?: number } = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      return !decoded.exp || decoded.exp < currentTime;
   } catch (error) {
      console.error("Error decodificando token:", error);
      return true;
   }
};

export const validateToken = async () => {
   const token = getStoredToken();

   if (!token || isTokenExpired(token)) {
      cerrarSesionAutomatica();

      await alertOk(
         "Sesión expirada",
         "Tu sesión ha expirado o no es válida. Por favor inicia sesión nuevamente.",
         "Iniciar sesión"
      );

      return false;
   }

   return true;
};