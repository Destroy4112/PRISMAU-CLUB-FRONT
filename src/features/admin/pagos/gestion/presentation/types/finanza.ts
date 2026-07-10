import type { Finanza } from "../../domain/model/finanza.model";

export interface ConceptoFinanza {
  id: string;
  nombre: string;
  descripcion: string;
  recaudado: number;
  pendiente: number;
  registros: number;
  promedioPendiente: number;
  porcentaje: number;
}

export interface EstadisticasFinanza {
  ingresos: Finanza["ingresos"];
  pendientes: Finanza["pendientes"];
  totalPendiente: number;
  registrosPendientes: number;
  carteraTotal: number;
  porcentajeRecaudo: number;
  conceptos: ConceptoFinanza[];
}