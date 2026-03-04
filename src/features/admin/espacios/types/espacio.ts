import type { IEspacio } from "@models/entities/Entity.model";

export type FilterEspacio = {
    Descripcion?: string;
};

export interface EspacioImagen {
    id: number | null,
    imagen: File | FormData | null
};

export type CardsEspaciosProps = {
    espacios: IEspacio[];
    loading: boolean;
    cargar: (espacio: IEspacio) => void;
    handleDelete: (id: number) => void;
    cambiarImagen: (id: number, imagen: string) => void;
    disponibilidad: (id: number) => void;
};

export type FormEspacioProps = {
    espacio: IEspacio;
    touched: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};