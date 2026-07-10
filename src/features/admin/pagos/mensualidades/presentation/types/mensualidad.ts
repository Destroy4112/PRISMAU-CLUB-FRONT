import type { Socio } from "@features/admin/pagos/administracion/domain/models/socio.model";
import type { Mensualidad } from "../../domain/models/mensualidad.model";
import type { PagoMensualidadResponse } from "../../domain/models/mensualidad.response.model";

export type MensualidadModalKey = "pagar" | "ver" | "pago";

export interface PayMensualidadForm {
    mensualidad: Mensualidad | null;
    metodoPago: string;
    referenciaPago: string;
    valorDiferente: boolean;
    valor: number;
    soporte: File | null
}

export const INITIAL_PAY_MENSUALIDAD_FORM: PayMensualidadForm = {
    mensualidad: null,
    metodoPago: "",
    referenciaPago: "",
    valorDiferente: false,
    valor: 0,
    soporte: null
}

export interface MensualidadesColumns {
    cargar: (row: Mensualidad) => void,
    ver: (row: Mensualidad) => void,
}

export interface FormMensualidadProps {
    form: PayMensualidadForm,
    archivoSeleccionado: File | null,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void,
    limpiar: () => void
}

export interface FacturaMensualidadProps {
    socio: Socio,
    mensualidad: Mensualidad
}

export interface InfoPagoMensualidadProps {
    pago: PagoMensualidadResponse,
    closeModal: () => void
}