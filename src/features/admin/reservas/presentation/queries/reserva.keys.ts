import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const reservaKeys = {
   all: ["reserva"] as const,
   lists: () => [...reservaKeys.all, "list"] as const,
   list: (params: PageParams & Filter) => [...reservaKeys.lists(), params] as const
};