import useModals from "@shared/hooks/useModal";
import type { SolicitudModalKey } from "../types/solicitud";
import { useSolicitudForm } from "./useSolicitudForm";
import { useSolicitudList } from "./useSolicitudList";

export default function useSolicitud() {

    const modal = useModals<SolicitudModalKey>();

    const list = useSolicitudList();
    const form = useSolicitudForm(modal);

    return {
        titulo: "Solicitudes",
        subtitulo: "Revisión de solicitudes de usuarios",
        modals: modal.modals,
        ...list,
        ...form
    };
}