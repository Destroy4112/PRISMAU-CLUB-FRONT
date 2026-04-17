export type AdministradorId = number;

export interface Administrador {
    id: AdministradorId;
    userId: number,
    nombre: string,
    apellidos: string,
    correo: string,
    telefono: string,
    user: Credenciales,
    estado: number,
}

export interface Credenciales {
    id?: number,
    documento: string,
    password?: string,
    rol?: number
}