import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const accesoKeys = {
    all: ["acceso"] as const,
    lists: (params: PageParams & Filter) => [...accesoKeys.all, "list", params] as const
};