export const menuRolKeys = {
    all: ["menu-rol"] as const,
    menu: () => [...menuRolKeys.all, "menu"] as const,
    list: () => [...menuRolKeys.all, "list"] as const,
    listByRol: (rolId: number | string) => [...menuRolKeys.list(), rolId],
}; 