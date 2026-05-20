import type { TableColumn } from 'react-data-table-component';
import { FaListOl } from 'react-icons/fa';
import type { RespuestaEncuesta } from '../../domain/model/respuesta-encuesta.model';
import type { ColumnsRespuestaEncuestaProps } from '../types/respuesta-encuesta';
import { formatearFechaHora } from '@shared/utilities/convertidores/normalizeText';

export default function RespuestaEncuestaColumns({ cargar }: ColumnsRespuestaEncuestaProps): TableColumn<RespuestaEncuesta>[] {

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: '50px',
        },
        {
            name: "Nombre Completo",
            cell: row => row.nombre,
        },
        {
            name: "Fecha de respuesta",
            cell: row => formatearFechaHora(row.fechaRespuesta!),
        },
        {
            name: "",
            cell: row => (
                <div className="flex">
                    <button onClick={() => cargar(row)} className='text-blue-700 font-semibold hover:underline cursor-pointer' title='Preguntas' >
                        Ver Respuestas
                    </button>
                </div>
            ),
            width: '150px',
        },
    ];
}
