import type { QueryKey } from "@tanstack/react-query";

export const familiarKeys = {
    all: (): QueryKey => ["familiar"],
    lists: (): QueryKey => ["familiar", "list"],
    list: (id: number, rol: string): QueryKey => ["familiar", "list", id, rol]
};