import type { FieldConfig } from "@components/buscador/buscador.type";
import { FaKeyboard } from "react-icons/fa";

export const CAMPOS_ADMIN: FieldConfig[] = [
    { name: "Nombre", label: "Nombre", type: "text", placeholder: "Nombre del admin", icon: FaKeyboard },
    { name: "Apellidos", label: "Apellidos", type: "text", placeholder: "Apellidos del admin", icon: FaKeyboard },
];