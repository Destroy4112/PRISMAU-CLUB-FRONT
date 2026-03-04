import type { FieldConfig } from "@components/buscador/buscador.type";
import { FaIdCardAlt, FaKeyboard } from "react-icons/fa";

export const CAMPOS_ACCESO: FieldConfig[] = [
    { name: "Nombre", label: "Nombre", type: "text", placeholder: "Nombre del invitado", icon: FaKeyboard },
    { name: "Apellidos", label: "Apellidos", type: "text", placeholder: "Apellidos del invitado", icon: FaKeyboard },
    { name: "Documento", label: "Documento", type: "number", placeholder: "Documento del invitado", icon: FaIdCardAlt },
];