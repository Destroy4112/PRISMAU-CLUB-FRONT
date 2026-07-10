import { getFilePreview } from "@shared/utilities/convertidores/converters";
import { formatearFechaMesAnio } from "@shared/utilities/convertidores/normalizeText";
import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import type { Mensualidad, PagoMensualidad } from "../../domain/models/mensualidad.model";
import type { PagoMensualidadResponse } from "../../domain/models/mensualidad.response.model";
import type { MensualidadDTO, PagoMensualidadDto, PayMensualidadDto } from "../dto/mensualidad.dto";
import type { PagoMensualidadResponseDto } from "../dto/mensualidad.response.dto";

export function pagoMensualidadDtoToDomain(dto: PagoMensualidadDto): PagoMensualidad {
    return {
        id: dto.id,
        mensualidadId: dto.mensualidad_id,
        email: dto.email,
        nombre: dto.nombre,
        identificacion: dto.identificacion,
        metodoPago: dto.metodo_pago,
        referenciaPago: dto.referencia_pago,
        monto: dto.monto,
        tarjeta: dto.tarjeta,
        fechaPago: dto.fecha_pago,
        soporte: getFilePreview(dto.soporte)
    }
}

export function mensualidadDtoToDomain(dto: MensualidadDTO): Mensualidad {
    return {
        id: dto.id,
        userId: dto.user_id,
        fecha: dto.fecha,
        valor: dto.valor,
        estado: dto.estado,
        abono: dto.total_pagos,
        restante: dto.restante,
        pagos: dto.pagos.map(p => pagoMensualidadDtoToDomain(p))
    }
}

export function mensualidadPayInputToDto(input: PayMensualidadInput): PayMensualidadDto {
    return {
        mensualidad_id: input.mensualidadId!,
        metodo_pago: input.metodoPago,
        referencia_pago: input.referenciaPago,
        valor_diferente: input.valorDiferente,
        valor: input.valor,
        soporte: input.soporte!
    }
}

export function mensualidadPayDtoToFormData(dto: PayMensualidadDto): FormData {
    const formData = new FormData();
    formData.append("mensualidad_id", dto.mensualidad_id.toString());
    formData.append("metodo_pago", dto.metodo_pago);
    formData.append("referencia_pago", dto.referencia_pago);
    formData.append('valor_diferente', dto.valor_diferente ? '1' : '0');
    if (dto.valor_diferente && dto.valor !== undefined && dto.valor !== null) {
        formData.append('valor', String(dto.valor));
    }
    formData.append("soporte", dto.soporte);
    return formData;
}

export function mensualidadResponseDtoToDomain(dto: PagoMensualidadResponseDto): PagoMensualidadResponse {
    return {
        montoPagado: dto.monto_pagado,
        montoRestante: dto.monto_restante,
        pagos: dto.pagos_aplicados.map(p => {
            return {
                mensualidadId: p.mensualidad_id,
                fecha: formatearFechaMesAnio(p.fecha),
                saldoAnterior: p.saldo_anterior,
                valorAplicado: p.valor_aplicado,
                saldoNuevo: p.saldo_nuevo,
                pagada: p.pagada
            }
        })
    }
}