export interface FiltersContrato {
    Nombres?: string;
    Apellidos?: string;
    Identificacion?: string;
}

export const INITIAL_FILTERS_CONTRATO: FiltersContrato = {
    Nombres: "",
    Apellidos: "",
    Identificacion: "",
};