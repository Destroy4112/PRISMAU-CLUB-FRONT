export type SearchUsuarioTipoDTO = | "ASOCIADO" | "ADHERENTE" | "FAMILIAR" | "EMPLEADO";

export type ResultSearchResponseDTO =
    | { status: true; data: DataResultSearchDTO }
    | { status: false; message: string };

export type DataResultSearchDTO = {
    status: boolean;
    tipo: SearchUsuarioTipoDTO;
    user: SearchPersonaBaseDTO;
    relacionado: SearchPersonaBaseDTO | null;
};

export type SearchPersonaBaseDTO = {
    id: number;
    imagen: string | null;
    user_id: number;
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Telefono: string;
    TipoDocumento: string;
    Documento: string;
    Sexo: string;
    Codigo?: string | null;
    Cargo?: string | null;
    Estado: number;
};