import { useAppLocation, useAppNavigate } from '@hooks/useStore';
import { PUBLIC_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { alertError, alertSucces, alertWarning } from '@utils/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import useQueryRecuperar from '../api/useQueryVerificar';
import type { IVerifyReset } from '../types/verificarCodigo';

export default function useVerificarCodigo() {

    const documento = useAppLocation()?.state?.documento;
    const navigate = useAppNavigate();

    const { isPending, verificarMutation } = useQueryRecuperar();

    const [data, setData] = useState<IVerifyReset>(getInitialData());

    //--------------------- INITIAL STATE -----------------------------------------

    function getInitialData() {
        return {
            Documento: documento,
            code: ''
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setData(prev => ({ ...prev, code: e.target.value }));
    }

    const handleSubmit = (): void => {
        verificarMutation(data, {
            onSuccess: (res) => {
                if (res.status) {
                    alertSucces(res.message);
                    navigate(PUBLIC_ROUTES.CHANGE_PASSWORD, { state: { data }, replace: true });
                } else {
                    setData(getInitialData());
                    res.errors.forEach((error: string) => alertWarning(error));
                }
            }, onError: (error) => alertError(error.message)
        });
    }

    return {
        title: "Recuperación de cuenta",
        description: "Se ha enviado un código de verificación a tu correo, por favor ingresalo para recuperar tu cuenta",
        data,
        loading: isPending,
        handleChange,
        handleSubmit,
    }
}
