import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const administradorKeys = {
   all: ["administrador"] as const,
   lists: () => [...administradorKeys.all, "list"] as const,
   list: (params: PageParams & Filter) => [...administradorKeys.lists(), params] as const,
};