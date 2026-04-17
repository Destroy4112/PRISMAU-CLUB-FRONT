import type { PageParams } from "@shared/constants/response/Response.model";
import type { QueryKey } from "@tanstack/react-query";
import type { AdministradorFilter } from "../../domain/models/administrador.filters";

export const administradorKeys = {
    all: (): QueryKey => ["administrador"],
    lists: (): QueryKey => ["administrador", "list"],
    list: ({ page, limit, filters }: PageParams & { filters?: AdministradorFilter }): QueryKey => {
        const nombre = (filters?.Nombre ?? "").trim();
        const apellidos = (filters?.Apellidos ?? "").trim();
        return ["administrador", "list", page, limit, nombre, apellidos];
    },
};