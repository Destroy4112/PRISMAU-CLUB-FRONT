import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { AsociadoFilter } from "../../domain/asociado.filters";

export const asociadoKeys = {
    all: (): QueryKey => ["asociado"],
    lists: (): QueryKey => ["asociado", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: AsociadoFilter }): QueryKey => {
        const nombre = (filters?.Nombre ?? "").trim();
        const apellidos = (filters?.Apellidos ?? "").trim();
        const documento = (filters?.Documento ?? "").trim();
        const estado = filters?.Estado ?? 10;
        return ["asociado", "list", page, limit, nombre, apellidos, documento, estado];
    },
};