import type { IconType } from "react-icons/lib";

export interface FieldConfig {
   name: string;
   label: string;
   type: string;
   icon?: IconType;
   placeholder?: string;
   items?: { value: string | number, label: string; }[];
}

export interface FiltrosBusquedaProps {
   fields: FieldConfig[];
   values: Record<string, any>;
   handleChange: (e: any) => void;
   limpiar: () => void;
}
