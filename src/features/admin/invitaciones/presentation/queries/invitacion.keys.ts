import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const invitacionKeys = {
   all: ["invitacion"] as const,
   lists: (params: PageParams & Filter) => [...invitacionKeys.all, "list", params] as const
};