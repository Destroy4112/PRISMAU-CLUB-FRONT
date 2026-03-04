import type { QueryKey } from "@tanstack/react-query";

export const menuRolKeys = {
    all: (): QueryKey => ["menu-rol"],
    lists: (): QueryKey => ["menu-rol", "list"],
    list: (): QueryKey => { return ["menu-rol", "list"]; },
    listByRol: (rolId: number | string): QueryKey => ["menu-rol", "list", rolId],
}; 