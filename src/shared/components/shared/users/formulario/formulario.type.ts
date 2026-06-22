import type { ChangeEvent } from "react";

export interface FormImagenProps {
    value?: string | null;
    label: string;
    name: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    deleteImagen?: () => void;
}

export type Estado = {
    estado: number;
    motivo: string;
};

export type FormEstadoProps = {
    estado: Estado;
    handleChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export type FormClaveProps = {
    value?: string | number | undefined;
    hanleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}