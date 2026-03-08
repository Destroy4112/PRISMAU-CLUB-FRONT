import { alertOk } from "@shared/utilities/alerts/alertas.utility";
import { cerrarSesionAutomatica } from "@shared/utilities/logout/logout.utility";
import { getStoredToken } from "@shared/utilities/session/auth-session.storage";
import { isTokenExpired } from "@shared/utilities/token/token.utility";
import { http } from "./axios.instance";

let isInitialized = false;
let isSessionExpiredAlertOpen = false;

export const axiosInterceptor = () => {
    if (isInitialized) return;
    isInitialized = true;

    http.interceptors.request.use(
        async (request) => {
            const token = getStoredToken();

            if (!token) return request;

            if (isTokenExpired(token)) {
                if (!isSessionExpiredAlertOpen) {
                    isSessionExpiredAlertOpen = true;
                    await alertOk(
                        "Sesión expirada",
                        "Tu sesión ha expirado. Por favor inicia sesión nuevamente.",
                        "Iniciar sesión"
                    );
                    cerrarSesionAutomatica();
                    isSessionExpiredAlertOpen = false;
                }

                return Promise.reject({
                    code: "TOKEN_EXPIRED",
                    message: "Token expirado",
                });
            }

            request.headers.Authorization = `Bearer ${token}`;
            return request;
        },
        (error) => Promise.reject(error)
    );

    http.interceptors.response.use(
        (response) => response,
        async (error) => {
            const status = error?.response?.status;

            if ((status === 401 || status === 403) && !isSessionExpiredAlertOpen) {
                isSessionExpiredAlertOpen = true;

                await alertOk(
                    status === 401 ? "Sesión inválida" : "Acceso denegado",
                    status === 401
                        ? "Tu sesión no es válida o ha expirado."
                        : "No tienes permiso para realizar esta acción.",
                    status === 401 ? "Iniciar sesión" : "Cerrar"
                );

                cerrarSesionAutomatica();
                isSessionExpiredAlertOpen = false;
            }

            return Promise.reject(error);
        }
    );
};