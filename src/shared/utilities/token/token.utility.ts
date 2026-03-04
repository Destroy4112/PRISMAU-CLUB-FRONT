import { CONST_TOKEN } from "@shared/constants/constants/constants.model";
import { jwtDecode } from "jwt-decode";
import { alertOk } from "../alerts/alertas.utility";
import { usarStorageString } from "../localstorage/localstorage.utility";
import { cerrarSesionAutomatica } from "../logout/logout.utility";

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
    const token = usarStorageString(CONST_TOKEN);
    if (!token || isTokenExpired(token)) {
        await alertOk(
            "Sesión expirada",
            "Tu sesión ha expirado o no es válida. Por favor inicia sesión nuevamente.",
            "Iniciar sesión"
        );
        cerrarSesionAutomatica();
        return false;
    }
    return true;
};