import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Rubro } from "../../domain/model/rubro.model";
import { rubroDomainToForm, rubroFormToCreateInput, rubroFormToUpdateInput } from "../mapper/rubro-form.mapper";
import { useCreateRubroMutation } from "../mutations/useCreateRubroMutation";
import { useUpdateRubroMutation } from "../mutations/useUpdateRubroMutation";
import { RUBRO_FORM_INITIAL, type RubroForm, type RubroModalKey } from "../types/rubro";

export function useRubroForm(modalApi: ModalsApi<RubroModalKey>) {

    const { toggleModal } = modalApi;

    const [rubroForm, setRubroForm] = useState<RubroForm>(RUBRO_FORM_INITIAL);
    const [touched, setTouched] = useState<boolean>(false);
    const [editId, setEditId] = useState<number | null>(null);
    const isEditing = editId != null;

    const resetForm = (): void => {
        setTouched(false);
        setRubroForm(RUBRO_FORM_INITIAL);
        setEditId(null);
    };

    const openModal = (): void => {
        resetForm();
        toggleModal("createUpdate");
    };

    const closeModal = (): void => {
        toggleModal("createUpdate");
        resetForm();
    };

    const { mutate: createRubroMutation, isPending: isCreating } = useCreateRubroMutation({
        onOk: () => closeModal(),
    });

    const { mutate: updateRubroMutation, isPending: isUpdating } = useUpdateRubroMutation({
        onOk: () => closeModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setRubroForm((prev) => ({ ...prev, [name]: value }));
    };

    const cargar = (row: Rubro): void => {
        setEditId(row.id!);
        setRubroForm(rubroDomainToForm(row));
        toggleModal("createUpdate");
    };

    const submit = (): void => {
        setTouched(true);
        if (isEditing && editId != null) {
            updateRubroMutation(rubroFormToUpdateInput(rubroForm, editId));
            return;
        }
        createRubroMutation(rubroFormToCreateInput(rubroForm));
    };

    return {
        rubroForm,
        touched,
        loading: isCreating || isUpdating,
        tituloModal: isEditing ? "Editar Rubro" : "Crear Rubro",
        openModal,
        closeModal,
        cargar,
        handleChange,
        submit,
    };
}