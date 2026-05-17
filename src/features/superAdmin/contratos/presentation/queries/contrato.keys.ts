import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const contratoKeys = {
    all: ["contratos"] as const,
    lists: (params: PageParams & Filter) => [...contratoKeys.all, "list", params] as const
};