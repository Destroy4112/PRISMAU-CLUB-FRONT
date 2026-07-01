import useModals from "@shared/hooks/useModal";
import type { EventoModalKey } from "../types/evento";
import { useEventoActions } from "./useEventoActions";
import { useEventoForm } from "./useEventoForm";
import { useEventoList } from "./useEventoList";

export default function useEvento() {

    const modals = useModals<EventoModalKey>();

    const list = useEventoList();
    const form = useEventoForm(modals);
    const actions = useEventoActions();

    return {
        titulo: "Eventos",
        subtitulo: "Listado de eventos disponibles",
        modals: modals.modals,
        ...list,
        ...form,
        ...actions,
    }
}
