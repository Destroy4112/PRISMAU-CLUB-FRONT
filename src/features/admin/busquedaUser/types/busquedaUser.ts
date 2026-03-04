import type { IAdherente, IAsociado, ICredenciales, IEmpleado, IFamiliar } from "@models/usuario/Usuario.model";
import type { ChangeEvent } from "react";

export type BuscadorUserProps = {
    busqueda: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void
}

export interface BusquedaUserResponse {
    status: boolean;
    message: string;
    user: IAsociado | IAdherente | IFamiliar | IEmpleado;
    relacionado: IAdherente | IAsociado | null;
    credenciales: ICredenciales;
}

export type ResultadoBusquedaProps = {
    data?: BusquedaUserResponse;
    loading: boolean;
    activo: boolean;
    recargar: () => void;
};