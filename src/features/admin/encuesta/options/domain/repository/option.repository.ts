import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { OptionInput } from "../../application/contracts/option.input";
import type { Option, OptionId } from "../model/option.model";

export interface OptionRepository {
   getAll(id: number): Promise<Option[]>;
   create(rubro: OptionInput): Promise<ApiResponseVoid>;
   update(rubro: OptionInput): Promise<ApiResponseVoid>;
   delete(id: OptionId): Promise<ApiResponseVoid>;
}