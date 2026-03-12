import { useAppSelector } from "@core/store/redux/hooks";
import { selectRol } from "@features/auth/login/presentation/store/auth.selectors";
import imagen from "@shared/assets/img/imagen";
import { URL_BACK } from "@shared/constants/endpoints/Endpoints.model";
import type { TableColumn } from "react-data-table-component";
import { FaImages, FaListOl, FaLock, FaUser, FaUserEdit, FaUserPlus, FaUserSlash, FaUserTimes } from "react-icons/fa";
import type { Asociado } from "../../domain/asociado.model";
import type { ColumnsAsociadoProps } from "../types/asociado";

export default function AsociadoColumns(props: ColumnsAsociadoProps): TableColumn<Asociado>[] {

    const { cargar, handleDelete, goFamiliares, changeState, cargarImagen, reset } = props;

    const rol = useAppSelector(selectRol);

    return [
        {
            name: <FaListOl />,
            cell: (_row, i) => i + 1,
            width: "60px",
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex">
                    <button onClick={() => cargar(row)} className="rounded-full w-8 h-8 bg-blue-700 text-white flex justify-center items-center cursor-pointer" title="Editar">
                        <FaUserEdit />
                    </button>
                    {rol === 0 && (
                        <button onClick={() => handleDelete(row.id!)} className="rounded-full w-8 h-8 bg-red-600 text-white flex justify-center items-center cursor-pointer" title="Eliminar">
                            <FaUserTimes />
                        </button>
                    )}
                    <button onClick={() => goFamiliares(row)} className="rounded-full w-8 h-8 bg-yellow-500 text-white flex justify-center items-center cursor-pointer" title="Familiares">
                        <FaUserPlus />
                    </button>
                    <button onClick={() => changeState(row.id!)} className="rounded-full w-8 h-8 bg-green-600 text-white flex justify-center items-center cursor-pointer" title="Cambiar estado">
                        {row.Estado === 1 ? <FaUserSlash /> : <FaUser />}
                    </button>
                    <button onClick={() => cargarImagen(row.id!, row.imagen!)} className="rounded-full w-8 h-8 bg-pink-600 text-white flex justify-center items-center cursor-pointer" title="Cambiar imagen">
                        <FaImages />
                    </button>
                    <button onClick={() => reset(row.user_id!)} className="rounded-full w-8 h-8 bg-purple-600 text-white flex justify-center items-center cursor-pointer" title="Restablecer clave">
                        <FaLock />
                    </button>
                </div>
            ),
            width: "220px",
        },
        {
            name: "Grupo",
            cell: (row) => (
                <div className="flex justify-center items-center w-full">
                    <span className="bg-purple-100 text-purple-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">{row.familiares_count}</span>
                </div>
            ),
            width: "120px",
        },
        {
            name: "Estado",
            cell: (row) => (
                <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full ${row.Estado == 1 ? "bg-green-500" : row.Estado == 2 ? "bg-orange-500" : row.Estado == 3 ? "bg-purple-500" : row.Estado == 4 ? "bg-black" : "bg-red-600"} mr-2`}></div>
                    {row.Estado == 0 ? "Inactivo" : row.Estado == 1 ? "Activo" : row.Estado == 2 ? "Retirado" : row.Estado == 3 ? "En Mora" : "Retirado en Mora"}
                </div>
            ),
            width: "150px",
        },
        {
            name: "Nombre Completo",
            cell: (row) => (
                <div className="flex items-center space-x-3 w-full">
                    <div className="shrink-0">
                        {
                            <img className="w-10 h-10 rounded-full object-cover" src={row.imagen ? URL_BACK + row.imagen : row.Sexo == "Femenino" ? imagen.femenino : imagen.masculino} alt="Imagen del" />
                        }
                    </div>
                    <div className="grow">
                        <div className="text-base font-semibold whitespace-normal">{row.Nombre}</div>
                        <div className="font-normal text-gray-500 whitespace-normal">{row.Apellidos}</div>
                    </div>
                </div>
            ),
            width: "280px",
            style: {
                padding: "10px",
            },
        },
        {
            name: "Código",
            cell: (row) => (row.Codigo ? row.Codigo : <span className="bg-red-300 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Sin asignar</span>),
            width: "150px",
        },
        {
            name: "Identificación",
            selector: (row) => row.Documento,
        },
        {
            name: "Correo",
            selector: (row) => row.Correo,
            width: "300px",
        },
        {
            name: "Teléfono",
            selector: (row) => row.Telefono,
            width: "120px",
        },
    ];
}
