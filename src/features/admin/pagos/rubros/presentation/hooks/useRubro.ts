import useModals from "@shared/hooks/useModal";
import type { RubroModalKey } from "../types/rubro";
import { useRubroActions } from "./useRubroActions";
import { useRubroForm } from "./useRubroForm";
import { useRubroList } from "./useRubroList";

export default function useRubro() {

    const modals = useModals<RubroModalKey>();

    const list = useRubroList();
    const form = useRubroForm(modals);
    const actions = useRubroActions();

    return {
        titulo: 'Rubros',
        subtitulo: 'Administración de rubros',
        modals: modals.modals,
        campos: 'rubro...',
        ...list,
        ...form,
        ...actions
    }
}
