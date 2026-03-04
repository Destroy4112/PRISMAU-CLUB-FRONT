import type { FieldConfig } from "@components/buscador/buscador.type";
import { ESTADOS } from "@models/options/Options.model";
import { FaEye, FaIdCardAlt, FaKeyboard } from "react-icons/fa";

export const CAMPOS_ADHERENTE: FieldConfig[] = [
    { name: "Nombre", label: "Nombre", type: "text", placeholder: "Nombre del socio", icon: FaKeyboard },
    { name: "Apellidos", label: "Apellidos", type: "text", placeholder: "Apellidos del socio", icon: FaKeyboard },
    { name: "Documento", label: "Documento", type: "number", placeholder: "Documento del socio", icon: FaIdCardAlt },
    { name: "Estado", label: "Estado", type: "select", items: ESTADOS, icon: FaEye }
];