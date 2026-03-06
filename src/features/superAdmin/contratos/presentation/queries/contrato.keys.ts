import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { ContratoFilter } from "../../domain/contrato.filters";

export const contratoKeys = {
    all: (): QueryKey => ["contrato"],
    lists: (): QueryKey => ["contrato", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: ContratoFilter }): QueryKey => {
        const nombre = (filters?.Nombres ?? "").trim();
        const apellidos = (filters?.Apellidos ?? "").trim();
        const identificacion = (filters?.Identificacion ?? "").trim();
        return ["contrato", "list", page, limit, nombre, apellidos, identificacion];
    },
};