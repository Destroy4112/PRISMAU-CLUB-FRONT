import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const espacioKeys = {
   all: () => ["espacio"] as const,
   lists: () => [espacioKeys.all(), "list"] as const,
   list: (params: PageParams & FilterWithState) => [espacioKeys.all(), "list", params] as const,
   disponibilidad: (id?: number) => [espacioKeys.all(), "disponibilidad", id] as const
};