import { useAppLocation, useAppNavigate } from '@app/routes/hooks';
import { PUBLIC_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { alertError, alertSucces, alertWarning } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { cambiarFormToPayload } from '../../application/mappers/cambiar-form.mapper';
import useChangePassMutation from '../mutation/useChangePassMutation';
import { buildCambiarContext, INITIAL_CAMBIAR_FORM, type CambiarForm } from '../types/cambiarClave';

export default function useChangePass() {

    const navigate = useAppNavigate();
    const info = useAppLocation()?.state?.data;

    const { isPending, mutate: changePasswordMutation } = useChangePassMutation();

    const [data, setData] = useState<CambiarForm>(INITIAL_CAMBIAR_FORM);

    const context = buildCambiarContext(info.documento, info.code);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setData(prev => ({ ...prev, new_password: e.target.value }));
    }

    const handleSubmit = (): void => {
        const payload = cambiarFormToPayload(data, context);
        changePasswordMutation(payload, {
            onSuccess: (res) => {
                if (res.status) {
                    alertSucces(res.message);
                    navigate(PUBLIC_ROUTES.LOGIN, { replace: true });
                } else {
                    setData(INITIAL_CAMBIAR_FORM);
                    res.errors.forEach((error: string) => alertWarning(error));
                }
            }, onError: (error) => alertError(error.message)
        });
    }

    return {
        title: "Cambiar contraseña",
        description: "Ingresa una nueva contraseña para acceder a tu cuenta",
        data,
        loading: isPending,
        handleChange,
        handleSubmit,
    }
}
