import type { ChangeEvent } from "react";

export type FormImagenProps = {
    label: string;
    name: string;
    value?: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    deleteImagen?: () => void
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