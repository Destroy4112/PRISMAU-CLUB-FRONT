import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import { administradorPasswordToPayload } from "../../application/administrador-form.mapper";
import { useUpdatePasswordAdministradorMutation } from "../mutations/useUpdatePasswordAdministradorMutation";
import { ADMIN_PASSWORD_FORM_INITIAL, type AdministradorPasswordForm, type AdminModalKey } from "../types/admin";

export function useAdministradorPassword(modalApi: ModalsApi<AdminModalKey>) {

    const { toggleModal } = modalApi;

    const [passwordForm, setPasswordForm] = useState<AdministradorPasswordForm>(ADMIN_PASSWORD_FORM_INITIAL);

    const reset = (): void => setPasswordForm(ADMIN_PASSWORD_FORM_INITIAL);

    const openModalPass = (id: number): void => {
        setPasswordForm({ id, password: "" });
        toggleModal("clave");
    };

    const closeModalPass = (): void => {
        toggleModal("clave");
        reset();
    };

    const { mutate: changePasswordMutation, isPending: isChanging } = useUpdatePasswordAdministradorMutation({
        onOk: () => closeModalPass(),
    });

    const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setPasswordForm((prev) => ({ ...prev, password: target.value }));
    };

    const handleUpdatePass = (): void => {
        changePasswordMutation(administradorPasswordToPayload(passwordForm));
    };

    return {
        tituloModalClave: "Cambiar clave",
        passwordForm,
        isChanging,
        openModalPass,
        closeModalPass,
        handleChangePassword,
        handleUpdatePass,
    };
}