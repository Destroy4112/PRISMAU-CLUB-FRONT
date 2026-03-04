import type { ICredenciales, Usuario } from "@shared/constants/usuario/Usuario.model";

export type LoginPayload = {
    Documento: string;
    password: string;
};

export type Login = {
  status: boolean;
  token: string;
  user: Usuario;
  credenciales: ICredenciales;
  errors: string[]
};
