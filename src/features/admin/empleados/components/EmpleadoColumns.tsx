import { useAppSelector } from '@core/store/redux/hooks';
import { URL_BACK } from '@models/endpoints/Endpoints.model';
import type { IEmpleado } from '@models/usuario/Usuario.model';
import type { TableColumn } from 'react-data-table-component';
import { FaImages, FaListOl, FaLock, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import type { ColumnsEmpleadoProps } from '../types/empleado';

export default function EmpleadoColumns(props: ColumnsEmpleadoProps): TableColumn<IEmpleado>[] {

    const { cargar, handleDelete, cargarImagen, reset } = props;

    const rol = useAppSelector(state => state.credenciales.Rol);

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
                        <FaUserEdit />
                    </button>
                    {rol === 0 &&
                        <button onClick={() => handleDelete(row.id!)} className="rounded-full w-8 h-8 bg-red-600 text-white flex justify-center items-center cursor-pointer" title="Eliminar">
                            <FaUserTimes />
                        </button>
                    }
                    <button onClick={() => cargarImagen(row.id!, row.imagen)} className='rounded-full w-8 h-8 bg-yellow-500 text-white flex justify-center items-center cursor-pointer' title="Cambiar imagen">
                        <FaImages />
                    </button>
                    <button onClick={() => reset(row.user_id!)} className='rounded-full w-8 h-8 bg-green-600 text-white flex justify-center items-center cursor-pointer' title="Restablecer clave">
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
                    <div className={`h-2.5 w-2.5 rounded-full ${row.Estado == 1 ? 'bg-green-500' : row.Estado == 2 ? 'bg-orange-500' : row.Estado == 3 ? 'bg-purple-500' : row.Estado == 4 ? 'bg-black' : 'bg-red-600'} mr-2`}></div>
                    {row.Estado == 0 ? "Inactivo" : row.Estado == 1 ? "Activo" : row.Estado == 2 ? "Retirado" : row.Estado == 3 ? "En Mora" : "Retirado en Mora"}
                </div>
            ),
            width: '120px',
        },
        {
            name: "Cargo",
            selector: row => row.Cargo,
            width: '180px',
        },
        {
            name: "Nombre Completo",
            cell: row => (
                <div className="flex items-center space-x-3 w-full">
                    <div className="shrink-0">
                        {
                            row.imagen ?
                                <img className="w-10 h-10 rounded-full object-cover" src={URL_BACK + row.imagen} alt="Imagen del" /> :
                                row.Sexo == "Femenino" ?
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" alt="Imagen predeterminada de mujer" />
                                    : <img className="w-10 h-10 rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Imagen predeterminada de hombre" />
                        }
                    </div>
                    <div className="flex-grow">
                        <div className="text-base font-semibold whitespace-normal">{row.Nombre}</div>
                        <div className="font-normal text-gray-500 whitespace-normal">{row.Apellidos}</div>
                    </div>
                </div>
            ),
            width: '280px',
            style: {
                padding: '10px'
            }
        },
        {
            name: "Identificación",
            selector: row => row.Documento,

        },
        {
            name: "Correo",
            selector: row => row.Correo,
            width: '300px'
        },
        {
            name: "Teléfono",
            selector: row => row.Telefono,
            width: '120px'
        },
    ];
}
