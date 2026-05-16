import { useAppNavigate } from "@app/routes/hooks";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import type { ModalsApi } from "@shared/hooks/useModal";
import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback, useState, type ChangeEvent } from "react";
import type { Asociado } from "../../domain/model/asociado.model";
import { asociadoEstadoFormToInput } from "../mapper/asociado-form.mapper";
import { useDeleteAsociadoMutation } from "../mutations/useDeleteAsociadoMutation";
import { useResetPasswordAsociadoMutation } from "../mutations/useResetPasswordAsociadoMutation";
import { useUpdateStatusAsociadoMutation } from "../mutations/useUpdateStatusAsociadoMutation";
import { ASOCIADO_ESTADO_INITIAL, type AsociadoEstadoForm, type AsociadoModalKey } from "../types/asociado";

export function useAsociadoActions(modalApi: ModalsApi<AsociadoModalKey>) {

    const navigate = useAppNavigate();

    const { toggleModal } = modalApi;

    const [asociadoEstadoForm, setAsociadoEstadoForm] = useState<AsociadoEstadoForm>(ASOCIADO_ESTADO_INITIAL);

    const resetForm = () => {
        setAsociadoEstadoForm(ASOCIADO_ESTADO_INITIAL);
    }

    //-------------------- GO FAMILIARES -------------------------------------

    const goFamiliares = (asociado: Asociado) => {
        navigate(PRIVATE_ROUTES.FAMILIARES_ASOCIADO, { state: { asociado } });
    }

    // -------------------- CAMBIAR ESTADO -------------------------------------

    const { mutate: cambiarEstadoMutation, isPending: isUpdatingStatus } = useUpdateStatusAsociadoMutation({
        onOk: () => closeModalEstado(),
    });

    const closeModalEstado = (): void => {
        toggleModal("estado");
        resetForm();
    };

    const handleChangeEstado = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        setAsociadoEstadoForm((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const changeState = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere cambiar el estado de este asociado?", "Si, cambiar!")) {
            toggleModal("estado");
            setAsociadoEstadoForm((prev) => ({ ...prev, id }));
        }
    };

    const handleUpdateEstado = (): void => {
        cambiarEstadoMutation(asociadoEstadoFormToInput(asociadoEstadoForm));
    };

    //-------------------- ELIMINAR ASOCIADO -------------------------------------

    const { mutate: eliminarMutation } = useDeleteAsociadoMutation();

    const handleDelete = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este admin?", "Si, eliminar!")) {
            eliminarMutation(id);
        }
    }, [eliminarMutation]);

    //-------------------- RESETEAR CONTRASEÑA -------------------------------------

    const { mutate: resetPasswordMutation } = useResetPasswordAsociadoMutation();

    const handleResetPassword = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere restablecer la contraseña de este asociado?", "Si, restablecer!")) {
            resetPasswordMutation(id);
        }
    }, [resetPasswordMutation]);

    return {
        tituloModalEstado: "Cambiar estado",
        asociadoEstadoForm,
        isUpdatingStatus,
        closeModalEstado,
        goFamiliares,
        handleChangeEstado,
        changeState,
        handleDelete,
        handleUpdateEstado,
        handleResetPassword
    };
}