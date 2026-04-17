import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { SolicitudFilter } from "../../domain/models/solicitud.filters";

export const solicitudKeys = {
    all: (): QueryKey => ["solicitud"],
    lists: (): QueryKey => ["solicitud", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: SolicitudFilter }): QueryKey => {
        const nombre = (filters?.Nombre ?? "").trim();
        const apellidos = (filters?.Apellidos ?? "").trim();
        const estado = filters?.Estado ?? 10;
        return ["solicitud", "list", page, limit, nombre, apellidos, estado];
    },
};