import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const empleadoKeys = {
    all: () => ["empleado"] as const,
    lists: () => ["empleado", "list"] as const,
    list: (params: PageParams & FilterWithState) => ["empleado", "list", params] as const
};