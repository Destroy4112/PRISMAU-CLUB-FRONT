import type { FieldConfig } from "@shared/components/buscador/buscador.type";
import { ESTADOS_SOLICITUDES } from "@shared/constants/options/Options.model";
import { FaEye, FaKeyboard } from "react-icons/fa";

export const CAMPOS_SOLICITUD: FieldConfig[] = [
    { name: "Nombre", label: "Nombre", type: "text", placeholder: "Nombre del socio", icon: FaKeyboard },
    { name: "Apellidos", label: "Apellidos", type: "text", placeholder: "Apellidos del socio", icon: FaKeyboard },
    { name: "Estado", label: "Estado", type: "select", items: ESTADOS_SOLICITUDES, icon: FaEye }
];