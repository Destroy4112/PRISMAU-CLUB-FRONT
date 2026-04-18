import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import { solicitudDomainToForm, solicitudFormToPayload } from "../../application/mappers/solicitud-form.mapper";
import type { Solicitud } from "../../domain/models/solicitud.model";
import { useReplySolicitudMutation } from "../mutations/useReplySolicitudMutation";
import { INITIAL_SOLICITUD_FORM, INITIAL_SOLICITUD_REPLY_FORM, type SolicitudForm, type SolicitudModalKey, type SolicitudReplyForm } from "../types/solicitud";

export function useSolicitudForm(modalApi: ModalsApi<SolicitudModalKey>) {

    const { toggleModal } = modalApi;

    const [solicitudForm, setSolicitudForm] = useState<SolicitudForm>(INITIAL_SOLICITUD_FORM);
    const [solicitudReplyForm, setSolicitudReplyForm] = useState<SolicitudReplyForm>(INITIAL_SOLICITUD_REPLY_FORM);

    const resetForm = (): void => {
        setSolicitudReplyForm(INITIAL_SOLICITUD_REPLY_FORM);
    };

    const openModal = (solicitud: Solicitud): void => {
        setSolicitudReplyForm({ id: solicitud.id, respuesta: solicitud.respuesta! });
        setSolicitudForm(solicitudDomainToForm(solicitud));
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
        setSolicitudReplyForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (): void => {
        replySolicitudMutation(solicitudFormToPayload(solicitudReplyForm));
    };

    return {
        solicitud: solicitudForm,
        solicitudReplyForm,
        loading: isPending,
        tituloModal: "Responder Solicitud",
        openModal,
        closeModal,
        handleChange,
        handleSubmit
    };
}