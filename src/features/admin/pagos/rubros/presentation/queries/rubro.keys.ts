import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { RubroFilter } from "../../domain/rubro.filters";

export const rubroKeys = {
    all: (): QueryKey => ["rubros"],
    lists: (): QueryKey => ["rubros", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: RubroFilter }): QueryKey => {
        const rubro = (filters?.rubro ?? "").trim();
        return ["rubros", "list", page, limit, rubro];
    },
};