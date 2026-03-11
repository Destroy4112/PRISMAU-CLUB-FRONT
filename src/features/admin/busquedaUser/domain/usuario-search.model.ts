export type SearchEntityType = | "ASOCIADO" | "ADHERENTE" | "FAMILIAR" | "EMPLEADO";

export type ResultSearchResponse =
    | { status: true; data: DataResultSearch }
    | { status: false; message: string };

export type DataResultSearch = {
    tipo: SearchEntityType;
    principal: SearchPersonBase;
    relacionado: SearchPersonBase | null;
};

export type SearchPersonBase = {
    id: number;
    imagen: string | null;
    NombreCompleto: string;
    userId: number;
    Correo: string;
    Telefono: string;
    TipoDocumento: string;
    Documento: string;
    Sexo: string;
    Codigo?: string | null;
    Cargo?: string | null;
    Estado: number;
};