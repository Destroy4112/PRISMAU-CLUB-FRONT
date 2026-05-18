import { useAppSelector } from '@core/store/redux/hooks';
import { selectRol } from '@features/auth/presentation/store/session/session.selectors';
import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaListOl, FaTrashAlt } from 'react-icons/fa';
import type { Option } from '../../domain/model/option.model';
import type { ColumnsOptionProps } from '../types/option';

export default function OptionColumns({ cargar, handleDelete }: ColumnsOptionProps): TableColumn<Option>[] {

    const rol = useAppSelector(selectRol);

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
            cell: row => row.respuesta,
        },
    ];
}
