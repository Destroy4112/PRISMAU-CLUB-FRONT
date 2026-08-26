import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const adherenteKeys = {
   all: () => ["adherente"] as const,
   asociados: () => ["adherente", "asociados"] as const,
   lists: () => ["adherente", "list"] as const,
   list: (params: PageParams & FilterWithState) => ["adherente", "list", params] as const
};