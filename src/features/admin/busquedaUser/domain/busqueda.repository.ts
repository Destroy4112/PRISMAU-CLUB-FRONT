import type { ResultSearchResponse } from "./usuario-search.model";

export interface BusquedaRepository {
    get(documento: string): Promise<ResultSearchResponse>;
}