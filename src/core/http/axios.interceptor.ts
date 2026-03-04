import { CONST_TOKEN } from "@shared/constants/constants/constants.model";
import { alertOk } from "@shared/utilities/alerts/alertas.utility";
import { usarStorageString } from "@shared/utilities/localstorage/localstorage.utility";
import { cerrarSesionAutomatica } from "@shared/utilities/logout/logout.utility";
import { isTokenExpired } from "@shared/utilities/token/token.utility";
import { http } from "./axios.instance";

export const axiosInterceptor = () => {

    http.interceptors.request.use(
        async (request) => {
            const token = usarStorageString(CONST_TOKEN);
            if (token) {
                if (isTokenExpired(token)) {
                    await alertOk(
                        "Sesión expirada",
                        "Tu sesión ha expirado. Por favor inicia sesión nuevamente.",
                        "Iniciar sesión",
                    ).then(() => {
                        cerrarSesionAutomatica();
                    });
                    return Promise.reject({ code: "TOKEN_EXPIRED", message: "Token expirado" });
                }
                request.headers['Authorization'] = `Bearer ${token}`;
            }
            return request;
        },
        error => Promise.reject(error));

    http.interceptors.response.use(
        response => response,
        async (error) => {
            if (error.response?.status === 401) {
                await alertOk("Sesión inválida", "Tu sesión no es válida o ha expirado.", "Iniciar sesión");
                cerrarSesionAutomatica();
            }
            if (error.response?.status === 403) {
                await alertOk("Acceso denegado", "No tienes permiso para realizar esta acción.", "Cerrar");
                cerrarSesionAutomatica();
            }
            return Promise.reject(error);
        }
    );

}
