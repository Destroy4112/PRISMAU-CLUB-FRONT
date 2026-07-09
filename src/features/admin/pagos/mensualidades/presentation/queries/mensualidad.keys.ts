import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const mensualidadKeys = {
    all: ["mensualidad"] as const,
    list: () => [...mensualidadKeys.all, "list"] as const,
    lists: (params: PageParams & FilterWithState) => [...mensualidadKeys.list(), params] as const
};