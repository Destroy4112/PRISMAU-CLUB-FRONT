import { useAppSelector } from '@core/store/redux/hooks';
import type { IPregunta, IRespuesta } from "@models/entities/Entity.model";
import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaListOl, FaTrashAlt } from 'react-icons/fa';
import type { ColumnsPreguntaRespuestaProps } from '../types/encuesta';

export default function PreguntaRespuestaColumns({ name, cargar, handleDelete }: ColumnsPreguntaRespuestaProps): TableColumn<IPregunta | IRespuesta>[] {

    const rol = useAppSelector((state) => state.credenciales.Rol);

    const isPregunta = (row: IPregunta | IRespuesta): row is IPregunta => {
        return (row as IPregunta).Pregunta !== undefined;
    };

    const isRespuesta = (row: IPregunta | IRespuesta): row is IRespuesta => {
        return (row as IRespuesta).Respuesta !== undefined;
    };

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: '50px',
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex">
                    <button onClick={() => cargar(row)} className='flex items-center justify-center cursor-pointer rounded-full w-8 h-8 bg-blue-700 text-white' title='Editar'>
                        <FaEdit />
                    </button>
                    {rol === 0 && <button onClick={() => handleDelete(row.id!)} className='flex items-center justify-center cursor-pointer rounded-full w-8 h-8 bg-red-600 text-white' title='Eliminar'>
                        <FaTrashAlt />
                    </button>}
                </div>
            ),
            width: '150px',
        },
        {
            name: "Descripción",
            cell: row =>
                name === "Pregunta" ? (isPregunta(row) ? row.Pregunta : "") : (isRespuesta(row) ? row.Respuesta : ""),
        },
    ];
}
