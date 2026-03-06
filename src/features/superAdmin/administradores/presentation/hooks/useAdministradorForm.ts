import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Administrador, AdministradorId } from "../../domain/administrador.model";
import { useCreateAdministradorMutation } from "../mutations/useCreateAdministradorMutation";
import { useUpdateAdministradorMutation } from "../mutations/useUpdateAdministradorMutation";
import { ADMINISTRADOR_FORM_INITIAL, type AdministradorForm, type AdminModalKey } from "../types/admin";

export function useAdministradorForm(modalApi: ModalsApi<AdminModalKey>) {

    const { toggleModal } = modalApi;

    const [admin, setAdmin] = useState<AdministradorForm>(ADMINISTRADOR_FORM_INITIAL);
    const [editId, setEditId] = useState<AdministradorId | null>(null);
    const isEditing = editId != null;

    const resetForm = (): void => {
        setAdmin(ADMINISTRADOR_FORM_INITIAL);
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

    const { mutate: createAdminMutation, isPending: isCreating } = useCreateAdministradorMutation({
        onOk: () => closeModal(),
    });

    const { mutate: updateAdminMutation, isPending: isUpdating } = useUpdateAdministradorMutation({
        onOk: () => closeModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;

        if (name === "Documento" || name === "password") {
            setAdmin((prev) => ({ ...prev, user: { ...prev.user, [name]: value } }));
            return;
        }

        setAdmin((prev) => ({ ...prev, [name]: value }));
    };

    const cargar = (row: Administrador): void => {
        setEditId(row.id!);
        setAdmin(row as unknown as AdministradorForm);
        toggleModal("crearEditar");
    };

    const submit = (): void => {
        if (isEditing) {
            updateAdminMutation({ id: editId!, ...admin });
            return;
        }
        createAdminMutation(admin);
    };

    return {
        admin,
        isEditing,
        loading: isCreating || isUpdating,
        tituloModal: isEditing ? "Editar Administrador" : "Crear Administrador",
        openModal,
        closeModal,
        cargar,
        handleChange,
        submit,
    };
}