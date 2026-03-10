import { useEncuestaQuery } from "../queries/useEncuestaQuery";

export function useEncuestaList() {

    const { data: encuestas, isLoading } = useEncuestaQuery();

    return {
        encuestas,
        isLoading,
    };
}