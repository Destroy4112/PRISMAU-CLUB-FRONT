export interface AuthSession {
  token: string;
  user: SessionUser;
  isAuthenticated: boolean;
}

export interface SessionUser {
  id: number;
  userId: number;
  nombre: string;
  apellidos: string;
  correo: string;
  documento: string;
  rol: number;
}