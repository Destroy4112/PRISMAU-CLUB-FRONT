import { useAppSelector } from '@core/store/redux/hooks';
import { selectRol } from '@features/auth/presentation/store/session/session.selectors';
import { formatearFecha, formatearHora } from '@shared/utilities/convertidores/normalizeText';
import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaListOl, FaTrash } from 'react-icons/fa';
import type { Evento } from '../../domain/model/evento.model';
import type { ColumnEventoProps } from '../types/evento';

export default function EventosColumns({ cargar, handleDelete }: ColumnEventoProps): TableColumn<Evento>[] {

    const rol = useAppSelector(selectRol);

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: '50px'
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex">
                    <button onClick={() => cargar(row)} className="rounded-full w-8 h-8 bg-blue-700 text-white flex justify-center items-center cursor-pointer" title="Editar">
                        <FaEdit />
                    </button>
                    {rol === 0 &&
                        <button onClick={() => handleDelete(row.id!)} className="rounded-full w-8 h-8 bg-red-600 text-white flex justify-center items-center cursor-pointer" title="Eliminar">
                            <FaTrash />
                        </button>}
                </div>
            ),
            width: '100px'
        },
        {
            name: "Titulo",
            cell: row => row.titulo,
        },
        {
            name: "Tipo",
            cell: row => row.tipo,
        },
        {
            name: "Fecha del evento",
            cell: row => `${formatearFecha((row.fecha))} - ${formatearHora(row.hora)}`,
        },
        {
            name: "Vencimiento",
            cell: row => formatearFecha(row.vencimiento),
        }
    ];
}