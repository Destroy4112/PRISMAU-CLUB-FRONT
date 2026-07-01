import type { Evento } from "../../domain/model/evento.model";
import { useEventoQuery } from "../queries/useEventoQuery";

export function useEventoList() {

    const { data, isLoading } = useEventoQuery();

    const eventos: Evento[] = data || [];

    return {
        eventos,
        isLoading,
    };
}