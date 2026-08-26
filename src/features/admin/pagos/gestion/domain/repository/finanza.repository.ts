import type { Finanza } from "../model/finanza.model";

export interface FinanzaRepository {
   getFinanza(): Promise<Finanza>;
}