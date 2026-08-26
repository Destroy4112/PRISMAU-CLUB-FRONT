import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams } from "@shared/constants/response/Response.model";

export const solicitudKeys = {
   all: ["solicitud"] as const,
   lists: () => [...solicitudKeys.all, "list"],
   list: (params: PageParams & FilterWithState) => [...solicitudKeys.lists(), params] as const,
};