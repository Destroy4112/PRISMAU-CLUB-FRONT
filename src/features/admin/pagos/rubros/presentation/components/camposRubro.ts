import type { FieldConfig } from "@shared/components/buscador/buscador.type";
import { FaKeyboard } from "react-icons/fa";

export const CAMPOS_RUBRO: FieldConfig[] = [
    { name: "rubro", label: "Rubro", type: "text", placeholder: "Descripción del rubro", icon: FaKeyboard },
];