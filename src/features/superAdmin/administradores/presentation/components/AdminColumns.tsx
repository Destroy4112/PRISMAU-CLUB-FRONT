import type { TableColumn } from 'react-data-table-component';
import { FaEdit, FaListOl, FaLock, FaTrashAlt, FaUser, FaUserSlash } from 'react-icons/fa';
import type { Administrador } from '../../domain/models/administrador.model';
import type { ColumnsAdminProps } from '../types/admin';

export default function AdminColumns({ cargar, handleDelete, handleUpdateStatus, cambiarClave }: ColumnsAdminProps): TableColumn<Administrador>[] {

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: '60px',
        },
        {
            name: "Actions",
            cell: row => (
                <div className="flex">
                    <button onClick={() => cargar(row)} className="rounded-full w-8 h-8 bg-blue-700 text-white flex justify-center items-center cursor-pointer" title="Editar">
                        <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(row.id!)} className="rounded-full w-8 h-8 bg-red-600 text-white flex justify-center items-center cursor-pointer" title="Eliminar">
                        <FaTrashAlt />
                    </button>
                    <button onClick={() => handleUpdateStatus(row.id!)} className='rounded-full w-8 h-8 bg-yellow-400 text-white flex justify-center items-center cursor-pointer' title={row.estado == 1 ? 'Inactivar' : 'Activar'}>
                        {row.estado === 1 ? <FaUserSlash /> : <FaUser />}
                    </button>
                    <button onClick={() => cambiarClave(row.userId!)} className='rounded-full w-9 h-9 bg-purple-600 text-white flex justify-center items-center cursor-pointer' title="Cambiar Contraseña">
                        <FaLock />
                    </button>
                </div>
            ),
            width: '180px'
        },
        {
            name: "Estado",
            cell: row => (
                <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full ${row.estado === 1 ? 'bg-green-500' : 'bg-red-600'} mr-2`}></div>
                    {row.estado === 1 ? "Activo" : "Inactivo"}
                </div>
            ),
            width: '100px'
        },
        {
            name: "Nombre Completo",
            cell: row => row.nombre + " " + row.apellidos,
            width: '250px',
        },
        {
            name: "Teléfono",
            selector: row => row.telefono,
            width: '120px'
        },
        {
            name: "Correo",
            selector: row => row.correo,
            width: '250px'
        },
        {
            name: "Usuario",
            selector: row => row.user.documento,

        },
    ];
}
