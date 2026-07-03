export type SocioDTO = {
    id: number;
    imagen: string;
    nombre: string;
    apellidos: string;
    tipoDocumento: string;
    documento: string;
    sexo: string;
    codigo: string;
    estado: number;
    rol: number;
    mensualidad: string;
    cuota_baile: string;
}

export type field = "mensualidad" | "cuotaBaile";

export type UpdateSocioValueDto = {
    documento: string;
    field: field;
    value: string;
}