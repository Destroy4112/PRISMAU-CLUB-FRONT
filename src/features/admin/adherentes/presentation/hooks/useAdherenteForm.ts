import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import { useCreateAdherenteMutation } from "../mutations/useCreateAdherenteMutation";
import { useUpdateAdherenteMutation } from "../mutations/useUpdateAdherenteMutation";
import { ADHERENTE_FORM_INITIAL, type AdherenteForm, type AdherenteModalKey } from "../types/adherente";
import type { Adherente } from "../../domain/model/adherente.model";
import { adherenteDomainToForm, adherenteFormToCreateInput, adherenteFormToUpdateInput } from "../mapper/adherente-form.mapper";

export function useAdherenteForm(modalApi: ModalsApi<AdherenteModalKey>) {

    const { toggleModal } = modalApi;

    const [adherenteForm, setAdherenteForm] = useState<AdherenteForm>(ADHERENTE_FORM_INITIAL);
    const [touched, setTouched] = useState<boolean>(false);
    const [editId, setEditId] = useState<number | null>(null);
    const isEditing = editId != null;

    const resetForm = (): void => {
        setTouched(false);
        setAdherenteForm(ADHERENTE_FORM_INITIAL);
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

    const { mutate: createAdherenteMutation, isPending: isCreating } = useCreateAdherenteMutation({
        onOk: () => closeModal(),
    });

    const { mutate: updateAdherenteMutation, isPending: isUpdating } = useUpdateAdherenteMutation({
        onOk: () => closeModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setAdherenteForm((prev) => ({ ...prev, [name]: value }));
    };

    const cargar = (row: Adherente): void => {
        setEditId(row.id!);
        setAdherenteForm(adherenteDomainToForm(row));
        toggleModal("crearEditar");
    };

    const submit = (): void => {
        setTouched(true);
        if (isEditing && editId != null) {
            updateAdherenteMutation(adherenteFormToUpdateInput(adherenteForm, editId));
            return;
        }
        createAdherenteMutation(adherenteFormToCreateInput(adherenteForm));
    };

    return {
        adherenteForm,
        touched,
        loading: isCreating || isUpdating,
        tituloModal: isEditing ? "Editar Adherente" : "Crear Adherente",
        openModal,
        closeModal,
        cargar,
        handleChange,
        submit,
    };
}