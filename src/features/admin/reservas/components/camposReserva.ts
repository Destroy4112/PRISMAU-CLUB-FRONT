import type { FieldConfig } from "@components/buscador/buscador.type";
import { FaKeyboard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export const CAMPOS_RESERVA: FieldConfig[] = [
    { name: "Nombre", label: "Nombre", type: "text", placeholder: "Nombre del socio", icon: FaKeyboard },
    { name: "Apellidos", label: "Apellidos", type: "text", placeholder: "Apellidos del socio", icon: FaKeyboard },
    { name: "Espacio", label: "Espacio", type: "text", placeholder: "Espacio", icon: FaMapLocationDot },
];