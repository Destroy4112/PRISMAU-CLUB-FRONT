import type { ChangeEvent } from "react";
import type { Espacio } from "../../domain/model/espacio.model";

export type EspacioModalKey = "crearEditar";

export type EspacioForm = {
    descripcion: string,
    imagen: File | null,
    imagePreview: string | null,
    estado: number
}

export const ESPACIO_FORM_INITIAL: EspacioForm = {
    descripcion: "",
    imagen: null,
    imagePreview: null,
    estado: 1
}

export type CardsEspaciosProps = {
    espacios: Espacio[],
    loading: boolean,
    limit: number,
    page: number,
    total: number,
    onPageChange: (page: number) => void,
    onRowsPerPageChange: (limit: number) => void,
    cargar: (espacio: Espacio) => void,
    handleDelete: (id: number) => void,
    disponibilidad: (espacio: Espacio) => void
}

export type FormEspacioProps = {
    form: EspacioForm,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void
}