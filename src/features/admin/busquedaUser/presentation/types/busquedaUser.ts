import type { ChangeEvent } from "react";
import type { IconType } from "react-icons";
import type { DataResultSearch } from "../../domain/model/busqueda-user.model";

export type BuscadorUserProps = {
   busqueda: string;
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
   handleSubmit: () => void
}

export type ResultadoBusquedaProps = {
   data: DataResultSearch | null;
   loading: boolean;
   activo: boolean;
   recargar: () => void;
};

export type FieldProps = {
   label: string;
   value?: string | null;
   icon?: IconType;
   full?: boolean;
};