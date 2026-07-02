export interface ProgramacionForm {
    rubroId: string;
    anio: string;
    cuotas: string;
    isCuota: boolean;
}

export const INITIAL_PROGRAMACION_FORM: ProgramacionForm = {
    rubroId: "",
    anio: "",
    cuotas: "",
    isCuota: false
};