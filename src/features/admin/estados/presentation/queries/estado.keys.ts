import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const estadoKeys = {
   all: ["estado"] as const,
   lists: (params: PageParams & Filter) => [...estadoKeys.all, "list", params] as const
};