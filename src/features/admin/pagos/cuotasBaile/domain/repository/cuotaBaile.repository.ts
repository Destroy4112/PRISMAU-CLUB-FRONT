import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { PayCuotaBaileInput } from "../../application/contracts/cuotaBaile.input";
import type { CuotaBaile } from "../models/cuotaBaile.model";
import type { CuotaBaileStats, PagoCuotaBaileResponse } from "../models/cuotaBaile.response.model";

export interface CuotaBaileRepository {
    pay(payload: PayCuotaBaileInput): Promise<ApiResponse<PagoCuotaBaileResponse>>;
    get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<CuotaBaile, CuotaBaileStats>>;
}