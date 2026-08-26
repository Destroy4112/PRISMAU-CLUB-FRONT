import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const administracionKeys = {
   all: ["administracion"] as const,
   list: () => [...administracionKeys.all, "socio"] as const,
   lists: (params: PageParams & FilterWithState) => [...administracionKeys.list(), params] as const
};