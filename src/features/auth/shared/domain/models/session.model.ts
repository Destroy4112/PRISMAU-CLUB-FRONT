export type SessionResponse =
   | { status: true; data: Session, errors?: string[] }
   | { status: false; errors: string[], data?: never };


export interface Session {
   token: string;
   user: SessionUser;
   isAuthenticated: boolean;
}

export interface SessionUser {
   id: number;
   userId: number;
   nombre: string;
   apellidos: string;
   documento: string;
   estado: number;
   rol: number;
}