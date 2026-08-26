import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const asociadoKeys = {
   all: () => ["asociado"] as const,
   lists: () => ["asociado", "list"] as const,
   list: (params: PageParams & FilterWithState) => ["asociado", "list", params] as const
};