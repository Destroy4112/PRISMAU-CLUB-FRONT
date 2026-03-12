import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import { solicitudFormToPayload } from "../../application/solicitud-form.mapper";
import type { Solicitud } from "../../domain/solicitud.model";
import { useReplySolicitudMutation } from "../mutations/useReplySolicitudMutation";
import { INITIAL_SOLICITUD_REPLY_FORM, type SolicitudModalKey, type SolicitudReplyForm } from "../types/solicitud";

export function useSolicitudForm(modalApi: ModalsApi<SolicitudModalKey>) {

    const { toggleModal } = modalApi;

    const [solicitudForm, setSolicitudForm] = useState<SolicitudReplyForm>(INITIAL_SOLICITUD_REPLY_FORM);
    const [solicitud, setSolicitud] = useState<Solicitud | null>(null);

    const resetForm = (): void => {
        setSolicitudForm(INITIAL_SOLICITUD_REPLY_FORM);
    };

    const openModal = (solicitud: Solicitud): void => {
        setSolicitudForm({ id: solicitud.id, Respuesta: '' });
        setSolicitud(solicitud);
        toggleModal("reply");
    };

    const closeModal = (): void => {
        toggleModal("reply");
        resetForm();
    };

    const { mutate: replySolicitudMutation, isPending } = useReplySolicitudMutation({
        onOk: () => closeModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = target;
        setSolicitudForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (): void => {
        replySolicitudMutation(solicitudFormToPayload(solicitudForm));
    };

    return {
        solicitud,
        solicitudForm,
        loading: isPending,
        tituloModal: "Responder Solicitud",
        openModal,
        closeModal,
        handleChange,
        handleSubmit
    };
}