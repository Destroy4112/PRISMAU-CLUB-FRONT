import { getFilePreview } from "@shared/utilities/convertidores/converters";
import type { PayCuotaBaileInput } from "../../application/contracts/cuotaBaile.input";
import type { CuotaBaile, PagoCuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { PagoCuotaBaileResponse } from "../../domain/models/cuotaBaile.response.model";
import type { CuotaBaileDTO, PagoCuotaBaileDto, PayCuotaBaileDto } from "../dto/cuotaBaile.dto";
import type { PagoCuotaBaileResponseDto } from "../dto/cuotaBaile.response.dto";

export function pagoCuotaBaileDtoToDomain(dto: PagoCuotaBaileDto): PagoCuotaBaile {
   return {
      id: dto.id,
      cuotasBaileId: dto.cuotas_baile_id,
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

export function cuotaBaileDtoToDomain(dto: CuotaBaileDTO): CuotaBaile {
   return {
      id: dto.id,
      userId: dto.user_id,
      descripcion: dto.descripcion,
      valor: dto.valor,
      estado: dto.estado,
      abono: dto.total_pagos,
      restante: dto.restante,
      pagos: dto.pagos.map(p => pagoCuotaBaileDtoToDomain(p))
   }
}

export function cuotaBailePayInputToDto(input: PayCuotaBaileInput): PayCuotaBaileDto {
   return {
      cuotas_baile_id: input.cuotaBaileId,
      metodo_pago: input.metodoPago,
      referencia_pago: input.referenciaPago,
      valor_diferente: input.valorDiferente,
      valor: input.valor,
      soporte: input.soporte!
   }
}

export function cuotaBailePayDtoToFormData(dto: PayCuotaBaileDto): FormData {
   const formData = new FormData();
   formData.append("cuotas_baile_id", dto.cuotas_baile_id.toString());
   formData.append("metodo_pago", dto.metodo_pago);
   formData.append("referencia_pago", dto.referencia_pago);
   formData.append("valor_diferente", dto.valor_diferente.toString());
   formData.append("valor", dto.valor.toString());
   formData.append("soporte", dto.soporte);
   return formData;
}

export function cuotaBaileResponseDtoToDomain(dto: PagoCuotaBaileResponseDto): PagoCuotaBaileResponse {
   return {
      montoPagado: dto.monto_pagado,
      montoRestante: dto.monto_restante,
      pagos: dto.pagos_aplicados.map(p => {
         return {
            cuotaBaileId: p.cuotas_baile_id,
            descripcion: p.descripcion,
            saldoAnterior: p.saldo_anterior,
            valorAplicado: p.valor_aplicado,
            saldoNuevo: p.saldo_nuevo,
            pagada: p.pagada
         }
      })
   }
}