import useModals from "@shared/hooks/useModal";
import type { AsociadoModalKey } from "../types/asociado";
import { useAsociadoActions } from "./useAsociadoActions";
import { useAsociadoForm } from "./useAsociadoForm";
import useAsociadoImagen from "./useAsociadoImagen";
import { useAsociadoList } from "./useAsociadoList";

function useAsociado() {

    const modalApi = useModals<AsociadoModalKey>();

    const list = useAsociadoList();
    const form = useAsociadoForm(modalApi);
    const action = useAsociadoActions(modalApi);
    const imagen = useAsociadoImagen(modalApi);

    return {
        titulo: "Asociados",
        subtitulo: "Gestión de miembros asociados del club",
        modals: modalApi.modals,
        ...list,
        ...form,
        ...action,
        ...imagen
    };
}

export default useAsociado;
