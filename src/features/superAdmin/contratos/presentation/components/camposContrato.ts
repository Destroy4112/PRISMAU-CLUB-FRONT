import type { FieldConfig } from "@shared/components/buscador/buscador.type";
import { FaIdCardAlt, FaKeyboard } from "react-icons/fa";

export const CAMPOS_CONTRATO: FieldConfig[] = [
    { name: "Nombres", label: "Nombres", type: "text", placeholder: "Nombre", icon: FaKeyboard },
    { name: "Apellidos", label: "Apellidos", type: "text", placeholder: "Apellidos", icon: FaKeyboard },
    { name: "Identificacion", label: "Identificacion", type: "number", placeholder: "Identificacion", icon: FaIdCardAlt },
];