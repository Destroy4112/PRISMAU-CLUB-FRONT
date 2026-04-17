import { useAppQueryClient } from "@core/store/react-query/hooks";
import useUpdatePasswordMutation from "@features/users/presentation/mutations/useUpdatePasswordMutation";
import { type ModalsApi } from "@shared/hooks/useModal";
import { alertError, alertSucces, alertWarning } from "@shared/utilities/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import { administradorPasswordFormToPayload } from "../../application/mappers/administrador-form.mapper";
import { administradorKeys } from "../queries/administrador.keys";
import { ADMIN_PASSWORD_FORM_INITIAL, type AdministradorPasswordForm, type AdminModalKey } from "../types/admin";

export function useAdministradorPassword(modalApi: ModalsApi<AdminModalKey>) {

    const queryClient = useAppQueryClient();

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

    const { mutate: changePasswordMutation, isPending: isChanging } = useUpdatePasswordMutation({
        onSuccess: async (res) => {
            if (res.status) {
                await queryClient.invalidateQueries({ queryKey: administradorKeys.all() });
                closeModalPass();
                alertSucces(res.message);
            } else {
                res.errors.forEach((error: string) => alertWarning(error));
            }
        },
        onError: (error) => { alertError(error.message || "No fue posible actualizar la clave"); },
    });

    const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setPasswordForm((prev) => ({ ...prev, password: target.value }));
    };

    const handleUpdatePass = (): void => {
        const payload = administradorPasswordFormToPayload(passwordForm);
        changePasswordMutation(payload);
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