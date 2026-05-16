import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { AsociadoFilter } from "../../application/contracts/asociado.filters";

export const asociadoKeys = {
    all: (): QueryKey => ["asociado"],
    lists: (): QueryKey => ["asociado", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: AsociadoFilter }): QueryKey => {
        const nombre = (filters?.nombre ?? "").trim();
        const apellidos = (filters?.apellidos ?? "").trim();
        const documento = (filters?.documento ?? "").trim();
        const estado = filters?.estado ?? 10;
        return ["asociado", "list", page, limit, nombre, apellidos, documento, estado];
    },
};