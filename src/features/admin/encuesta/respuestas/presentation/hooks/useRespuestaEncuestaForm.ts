import type { ModalsApi } from '@shared/hooks/useModal';
import { useState } from 'react';
import type { RespuestaEncuesta } from '../../domain/model/respuesta-encuesta.model';
import type { RespuestaEncuestaModalKey } from '../types/respuesta-encuesta';

export default function useRespuestaEncuestaForm(modalsApi: ModalsApi<RespuestaEncuestaModalKey>) {

    const { toggleModal } = modalsApi;

    const [respuesta, setRespuesta] = useState<RespuestaEncuesta | null>(null);

    const cargar = (respuesta: RespuestaEncuesta) => {
        toggleModal('detalle');
        setRespuesta(respuesta);
    }

    const cerrar = () => {
        toggleModal('detalle');
        setRespuesta(null);
    }

    return {
        tituloModal: 'Respuestas',
        respuesta,
        cargar,
        cerrar,
    }
}
