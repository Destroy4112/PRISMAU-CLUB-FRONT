import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { ReservaFilter } from "../../domain/reserva.filters";

export const reservaKeys = {
    all: (): QueryKey => ["reserva"],
    lists: (): QueryKey => ["reserva", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: ReservaFilter }): QueryKey => {
        const nombre = (filters?.Nombres ?? "").trim();
        const apellidos = (filters?.Apellidos ?? "").trim();
        const espacio = (filters?.Espacio ?? "").trim();
        return ["reserva", "list", page, limit, nombre, apellidos, espacio];
    },
};