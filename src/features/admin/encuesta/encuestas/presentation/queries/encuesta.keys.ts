import type { QueryKey } from "@tanstack/react-query";

export const encuestaKeys = {
    all: (): QueryKey => ["encuesta"],
    lists: (): QueryKey => ["encuesta", "list"],
    list: (): QueryKey => { return ["encuesta", "list"]; },
}; 