import type { Socio } from "@features/admin/pagos/administracion/domain/models/socio.model";
import type { CuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { PagoCuotaBaileResponse } from "../../domain/models/cuotaBaile.response.model";

export type CuotaBaileModalKey = "pagar" | "ver" | "pago";

export interface PayCuotaBaileForm {
    cuotaBaile: CuotaBaile | null;
    metodoPago: string;
    referenciaPago: string;
    valorDiferente: boolean;
    valor: number;
    soporte: File | null
}

export const INITIAL_PAY_CUOTAS_FORM: PayCuotaBaileForm = {
    cuotaBaile: null,
    metodoPago: "",
    referenciaPago: "",
    valorDiferente: false,
    valor: 0,
    soporte: null
}

export interface CuotasBaileColumns {
    cargar: (row: CuotaBaile) => void,
    ver: (row: CuotaBaile) => void,
}

export interface FormCuotaBaileProps {
    form: PayCuotaBaileForm,
    archivoSeleccionado: File | null,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void,
    limpiar: () => void
}

export interface FacturaCuotaBaileProps {
    socio: Socio,
    cuotaBaile: CuotaBaile
}

export interface InfoPagoCuotaBaileProps {
    pago: PagoCuotaBaileResponse,
    closeModal: () => void
}