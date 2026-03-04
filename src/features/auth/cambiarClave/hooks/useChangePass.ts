import { useAppLocation, useAppNavigate } from '@hooks/useStore';
import { PUBLIC_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { alertError, alertSucces, alertWarning } from '@utils/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import useQueryRecuperar from '../api/useQueryChangePass';
import type { IPasswordReset } from '../types/cambiarClave';

export default function useChangePass() {

    const info = useAppLocation()?.state?.data;
    const navigate = useAppNavigate();

    const { isPending, changePasswordMutation } = useQueryRecuperar();

    const [data, setData] = useState<IPasswordReset>(getInitialData());

    //--------------------- INITIAL STATE -----------------------------------------

    function getInitialData() {
        return {
            Documento: info?.Documento,
            code: info?.code,
            new_password: ''
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setData(prev => ({ ...prev, new_password: e.target.value }));
    }

    const handleSubmit = (): void => {
        changePasswordMutation(data, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    navigate(PUBLIC_ROUTES.LOGIN, { replace: true });
                } else {
                    setData(getInitialData());
                    data.errors.forEach((error: string) => alertWarning(error));
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
