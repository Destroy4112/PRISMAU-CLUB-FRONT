import type { IProgramacionPagos } from '@models/entities/Entity.model';
import { alertError, alertSucces, alertWarning } from '@utils/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import apiQueryProgramacion from '../api/apiQueryProgramacion';
import type { Rubro } from '../../domain/programacion.entity';
import { useProgramarMutation } from '../mutations/useProgramarMutation';

export default function useProgramacion() {

    const [programacion, setProgramacion] = useState(getInitialData());

    //--------------------- INITIAL STATE -----------------------------------------

    //--------------------- PROGRAMAR ---------------------------------------------

    const { isPending, mutate: generarFacturasMutation } = useProgramarMutation();

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        setProgramacion({ ...programacion, [name]: value });
    }

    const handleChangeRubro = (rubro: Rubro): void => {
        setProgramacion({ ...programacion, rubro_id: rubro.id!, rubro: rubro.rubro });
    }

    const handleSubmit = (): void => {
        generarFacturasMutation(programacion, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    setProgramacion(getInitialData());
                } else {
                    alertWarning(data.message);
                }
            }, onError: (error) => alertError(error.message)
        });
    }

    return {
        titulo: "Programación de Pagos",
        subtitulo: "Administra y planifica pagos recurrentes",
        programacion,
        isPending,
        handleChange,
        handleChangeRubro,
        handleSubmit
    }
}
