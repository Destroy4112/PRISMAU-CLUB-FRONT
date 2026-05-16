import type { PageParams } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "../../application/contracts/administrador.filters";

export const administradorKeys = {
    all: ["administrador"] as const,
    lists: () => [...administradorKeys.all, "list"] as const,
    list: (params: PageParams & AdministradorFilter) => [...administradorKeys.lists(), params] as const,
};