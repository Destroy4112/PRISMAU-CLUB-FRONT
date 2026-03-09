export interface FilterReserva {
    Nombre?: string;
    Apellidos?: string;
    Espacio?: string;
}

export const INITIAL_FILTERS_RESERVA: FilterReserva = {
    Nombre: '',
    Apellidos: '',
    Espacio: '',
};