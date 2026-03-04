import type { QueryKey } from "@tanstack/react-query";

export const menuKeys = {
    all: (): QueryKey => ["menu"],
    lists: (): QueryKey => ["menu", "list"],
    list: (): QueryKey => { return ["menu", "list"]; },
}; 