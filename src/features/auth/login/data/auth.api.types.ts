import type { ICredenciales, Usuario } from "@shared/constants/usuario/Usuario.model";

export interface LoginApiResponse {
    status: boolean;
    token: string;
    user: Usuario;
    credenciales: ICredenciales;
    errors: string[];
}