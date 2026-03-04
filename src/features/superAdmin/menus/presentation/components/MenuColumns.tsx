import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import type { Menu } from '../../domain/menu.model';
import type { ColumnsMenuProps } from '../types/menu';

export default function MenuColumns({ cargar, eliminar }: ColumnsMenuProps): TableColumn<Menu>[] {

    return [
        {
            name: "N°",
            cell: (_row, i) => i + 1,
            width: '60px',
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex">
                    <button onClick={() => cargar(row)} className="rounded-full w-8 h-8 bg-blue-700 text-white flex justify-center items-center" title="Editar">
                        <FaEdit />
                    </button>
                    <button onClick={() => eliminar(row.id!)} className="rounded-full w-8 h-8 bg-red-600 text-white flex justify-center items-center" title="Eliminar">
                        <FaTrash />
                    </button>
                </div>
            ),
            width: '160px'
        },
        {
            name: "Label",
            cell: row => row.Name,
        },
        {
            name: "Tipo",
            cell: row => row.Type,
        },
        {
            name: "Ruta",
            cell: row => row.Route,
        },
        {
            name: "Icono",
            cell: row => (<i className={`fa fa-${row.Icon} text-${row.Color} text-lg`}></i>),
        },
        {
            name: "Color",
            cell: row => (<div className={`w-6 h-6 rounded-full bg-${row.Color}`}></div>),
        },
    ];
}