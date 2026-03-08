export interface LoginResponseDto {
  status: boolean;
  token: string;
  user: LoginUserDto;
  credenciales: LoginCredencialesDto;
  socio: unknown | null;
}

export interface LoginUserDto {
  id: number;
  user_id: number;
  Nombre: string;
  Apellidos: string;
  Correo: string;
  Telefono: string;
  Estado: number;
  created_at: string;
  updated_at: string;
}

export interface LoginCredencialesDto {
  id: number;
  Documento: string;
  Rol: number;
}