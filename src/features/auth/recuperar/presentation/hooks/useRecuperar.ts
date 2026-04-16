import { PUBLIC_ROUTES } from '@shared/constants/rutas/Rutas.model';
import { useState, type ChangeEvent } from 'react';
import { useAppNavigate } from '@app/routes/hooks';
import { alertError, alertSucces, alertWarning } from '@shared/utilities/alerts/alertas.utility';
import useRecuperarMutation from '../mutation/useRecuperarMutation';

export default function useRecuperar() {

    const navigate = useAppNavigate();

    const { isPending, mutate: recuperarMutation } = useRecuperarMutation();

    const [documento, setDocumento] = useState<string>('');

    const handleChangeDocumento = (e: ChangeEvent<HTMLInputElement>): void => {
        setDocumento(e.target.value);
    }

    const handleSubmit = (): void => {
        recuperarMutation(documento, {
            onSuccess: (data) => {
                if (data.status === true) {
                    alertSucces(data.message);
                    navigate(PUBLIC_ROUTES.VALIDAR, { state: { documento }, replace: true });
                } else {
                    setDocumento('');
                    data.errors.forEach((error: string) => alertWarning(error));
                }
            }, onError: (error) => alertError(error.message)
        });
    }

    return {
        title: "Busca tu cuenta",
        description: "Ingresa tu número de identificación para recuperar tu cuenta",
        documento,
        loading: isPending,
        handleSubmit,
        handleChangeDocumento
    }
}
