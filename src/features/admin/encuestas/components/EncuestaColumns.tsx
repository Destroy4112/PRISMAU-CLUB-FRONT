import { useAppNavigate, useAppSelector } from '@hooks/useStore';
import type { IEncuesta } from '@models/entities/Entity.model';
import { PRIVATE_ROUTES } from '@shared/constants/rutas/Rutas.model';
import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaListOl, FaQuestion, FaTrashAlt } from 'react-icons/fa';
import { FaChartColumn } from 'react-icons/fa6';
import type { ColumnEncuestaProps } from '../types/encuesta';

export default function EncuestaColumns({ cargarEncuesta, handleDelete }: ColumnEncuestaProps): TableColumn<IEncuesta>[] {

    const navigate = useAppNavigate();
    const rol = useAppSelector((state) => state.credenciales.Rol);

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: '45px',
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex">
                    <button onClick={() => cargarEncuesta(row)} className='flex items-center justify-center rounded-full w-8 h-8 bg-blue-700 text-white cursor-pointer' title='Editar' >
                        <FaEdit />
                    </button>
                    {rol === 0 &&
                        <button onClick={() => handleDelete(row.id!)} className='flex items-center justify-center rounded-full w-8 h-8 bg-red-600 text-white cursor-pointer' title='Eliminar' >
                            <FaTrashAlt />
                        </button>
                    }
                    <button onClick={() => navigate(PRIVATE_ROUTES.PREGUNTAS, { state: { encuesta: row } })} className='flex items-center justify-center rounded-full w-8 h-8 bg-purple-600 text-white cursor-pointer' title='Preguntas' >
                        <FaQuestion />
                    </button>
                    <button onClick={() => navigate(PRIVATE_ROUTES.ENCUESTA, { state: { encuesta: row } })} className='flex items-center justify-center rounded-full w-8 h-8 bg-pink-600 text-white cursor-pointer' title='Respuestas usuarios' >
                        <FaChartColumn />
                    </button>
                </div>
            ),
            width: '180px',
        },
        {
            name: "Preguntas",
            cell: row => row.preguntas_count,
            width: '110px',
        },
        {
            name: "Titulo",
            cell: row => row.Titulo,
            width: '250px',
        },
        {
            name: "Descripción",
            cell: row => row.Descripcion,
            style: {
                padding: '10px'
            }
        }
    ];
}
