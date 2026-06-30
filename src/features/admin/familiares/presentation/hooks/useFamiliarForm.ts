import { type ModalsApi } from "@shared/hooks/useModal";
import type { SocioDetail } from "@shared/models/usuario-detail.model";
import { useState, type ChangeEvent } from "react";
import type { Familiar, FamiliarId } from "../../domain/model/familiar.model";
import { familiarDomainToForm, familiarFormToCreateInput, familiarFormToUpdateInput } from "../mapper/familiar-form.mapper";
import { useCreateFamiliarMutation } from "../mutations/useCreateFamiliarMutation";
import { useUpdateFamiliarMutation } from "../mutations/useUpdateFamiliarMutation";
import { buildFamiliarContext, FAMILIAR_FORM_INITIAL, type FamiliarForm, type FamiliarModalKey } from "../types/familiar";

export function useFamiliarForm(modalApi: ModalsApi<FamiliarModalKey>, type: "Asociado" | "Adherente", socio: SocioDetail) {

    const { toggleModal } = modalApi;

    const context = buildFamiliarContext(socio, type);

    const [familiarForm, setFamiliarForm] = useState<FamiliarForm>(FAMILIAR_FORM_INITIAL);
    const [touched, setTouched] = useState<boolean>(false);
    const [editId, setEditId] = useState<FamiliarId | null>(null);
    const isEditing = editId != null;

    const resetForm = (): void => {
        setTouched(false);
        setFamiliarForm(FAMILIAR_FORM_INITIAL);
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

    const { mutate: createFamiliarMutation, isPending: isCreating } = useCreateFamiliarMutation({
        onOk: () => closeModal(),
    });

    const { mutate: updateFamiliarMutation, isPending: isUpdating } = useUpdateFamiliarMutation({
        onOk: () => closeModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setFamiliarForm((prev) => ({ ...prev, [name]: value }));
    };

    const cargar = (row: Familiar): void => {
        setEditId(row.id);
        setFamiliarForm(familiarDomainToForm(row));
        toggleModal("crearEditar");
    };

    const submit = (): void => {
        setTouched(true);
        if (isEditing && editId != null) {
            updateFamiliarMutation(familiarFormToUpdateInput(familiarForm, context, editId));
            return;
        }

        createFamiliarMutation(familiarFormToCreateInput(familiarForm, context));
    };

    return {
        familiarForm,
        touched,
        loading: isCreating || isUpdating,
        tituloModal: isEditing ? "Editar Familiar" : "Crear Familiar",
        openModal,
        closeModal,
        cargar,
        handleChange,
        submit,
    };
}