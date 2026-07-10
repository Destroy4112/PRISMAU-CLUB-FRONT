import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const cuotaBaileKeys = {
    all: ["cuotaBaile"] as const,
    list: () => [...cuotaBaileKeys.all, "list"] as const,
    lists: (params: PageParams & FilterWithState) => [...cuotaBaileKeys.list(), params] as const
};