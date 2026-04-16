export type SessionResponseDto =
    | { status: true; data: SessionDTO, errors?: string[] }
    | { status: false; errors: string[], data?: never };

export interface SessionDTO {
    token: string;
    user: SessionUserDTO;
}

export interface SessionUserDTO {
    id: number;
    user_id: number;
    nombre: string;
    apellidos: string;
    documento: string;
    estado: number;
    rol: number;
}