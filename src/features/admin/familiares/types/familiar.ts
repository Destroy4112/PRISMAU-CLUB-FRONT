import type { IFamiliar } from "@models/usuario/Usuario.model";
import type { ChangeEvent } from "react";

export interface IFamiliarLogo {
    id: number | null;
    imagen: File | FormData | null;
}

export type CardsFamiliaresProps = {
    familiares: IFamiliar[] | undefined;
    loading: boolean
    cargar: (familiar: IFamiliar) => void,
    handleDelete: (id: number) => void,
    change: (id: number, imagen: string) => void,
    reset: (id: number) => void
}

export type FormFamiliarProps = {
    familiar: IFamiliar,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
}