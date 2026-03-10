import useModals from '@shared/hooks/useModal';
import type { EncuestaModalKey } from '../types/encuesta';
import { useEncuestaActions } from './useEncuestaActions';
import { useEncuestaForm } from './useEncuestaForm';
import { useEncuestaList } from './useEncuestaList';

export default function useEncuesta() {

    const modalApi = useModals<EncuestaModalKey>();

    const list = useEncuestaList();
    const form = useEncuestaForm(modalApi);
    const actions = useEncuestaActions();

    return {
        titulo: "Encuestas",
        subtitulo: "Listado de encuestas disponibles",
        modal: modalApi.modals.crearEditar,
        ...list,
        ...form,
        ...actions,
    }
}