import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Evento } from "../../domain/model/evento.model";
import { eventoDomainToForm, eventoFormToCreateInput, eventoFormToUpdateInput } from "../mapper/evento-form.mapper";
import { useCreateEventoMutation } from "../mutations/useCreateEventoMutation";
import { useUpdateEventoMutation } from "../mutations/useUpdateEventoMutation";
import { INITIAL_EVENTO_FORM, type EventoForm, type EventoModalKey } from "../types/evento";

export function useEventoForm(modalApi: ModalsApi<EventoModalKey>) {

    const { toggleModal } = modalApi;

    const [eventoForm, setEventoForm] = useState<EventoForm>(INITIAL_EVENTO_FORM);
    const [touched, setTouched] = useState<boolean>(false);
    const [editId, setEditId] = useState<number | null>(null);
    const isEditing = editId != null;

    const resetForm = (): void => {
        setTouched(false);
        setEventoForm(INITIAL_EVENTO_FORM);
        setEditId(null);
    };

    const openModal = (): void => {
        resetForm();
        toggleModal("crearEditar");
    };

    const closeModal = (): void => {
        toggleModal("crearEditar");
        resetForm();
    };

    const { mutate: createEventoMutation, isPending: isCreating } = useCreateEventoMutation({
        onOk: () => closeModal(),
    });

    const { mutate: updateEventoMutation, isPending: isUpdating } = useUpdateEventoMutation({
        onOk: () => closeModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = target;
        setEventoForm(prev => ({ ...prev, [name]: value }));
    };

    const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setEventoForm(prev => ({ ...prev, [name]: checked }));
    };

    const cargar = (row: Evento): void => {
        setEditId(row.id);
        setEventoForm(eventoDomainToForm(row));
        toggleModal("crearEditar");
    };

    const submit = (): void => {
        setTouched(true);
        if (isEditing && editId != null) {
            updateEventoMutation(eventoFormToUpdateInput(eventoForm, editId));
            return;
        }

        createEventoMutation(eventoFormToCreateInput(eventoForm));
    };

    return {
        eventoForm,
        touched,
        loading: isCreating || isUpdating,
        tituloModal: isEditing ? "Editar Evento" : "Crear Evento",
        openModal,
        closeModal,
        cargar,
        handleChange,
        handleChangeCheck,
        submit,
    };
}