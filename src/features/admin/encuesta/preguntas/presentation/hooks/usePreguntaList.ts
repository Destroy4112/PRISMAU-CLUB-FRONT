import { usePreguntaQuery } from "../queries/usePreguntaQuery";

export function usePreguntaList(id: number) {

    const { data: preguntas, isLoading } = usePreguntaQuery(id);

    return {
        preguntas,
        isLoading,
    };
}