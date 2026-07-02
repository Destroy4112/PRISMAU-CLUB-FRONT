import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const rubroKeys = {
    all: ["rubros"],
    lists: () => [...rubroKeys.all, "list"],
    list: (params: PageParams & Filter) => [...rubroKeys.lists(), params] as const,
};