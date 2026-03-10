import type { QueryKey } from "@tanstack/react-query";

export const preguntaKeys = {
    all: (): QueryKey => ["pregunta"],
    lists: (): QueryKey => ["pregunta", "list"],
    list: (): QueryKey => { return ["pregunta", "list"]; },
    detail: (id: number): QueryKey => ["pregunta", "detail", id],
}; 