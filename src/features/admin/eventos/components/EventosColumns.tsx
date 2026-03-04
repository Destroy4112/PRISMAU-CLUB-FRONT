import { useAppSelector } from '@core/store/redux/hooks';
import type { IEvento } from '@models/entities/Entity.model';
import { formatearFecha, formatearHora } from '@utils/convertidores/normalizeText';
import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaListOl, FaTrash } from 'react-icons/fa';
import type { ColumnEventoProps } from '../types/eventos';

export default function EventosColumns({ cargar, handleDelete }: ColumnEventoProps): TableColumn<IEvento>[] {

    const rol = useAppSelector((state) => state.credenciales.Rol);

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
                    <button onClick={() => cargar(row)} className="rounded-full w-8 h-8 bg-blue-700 text-white flex justify-center items-center cursor-pointer" title="Editar"><FaEdit /></button>
                    {rol === 0 && <button onClick={() => handleDelete(row.id!)} className="rounded-full w-8 h-8 bg-red-600 text-white flex justify-center items-center cursor-pointer" title="Eliminar"><FaTrash /></button>}
                </div>
            ),
            width: '100px'
        },
        {
            name: "Titulo",
            cell: row => row.Titulo,
        },
        {
            name: "Tipo",
            cell: row => row.Tipo,
        },
        {
            name: "Fecha del evento",
            cell: row => `${formatearFecha((row.Fecha))} - ${formatearHora(row.Hora)}`,
        },
        {
            name: "Vencimiento",
            cell: row => formatearFecha(row.Vencimiento),
        }
    ];
}