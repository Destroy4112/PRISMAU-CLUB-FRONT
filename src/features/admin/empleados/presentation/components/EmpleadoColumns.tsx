import { URL_BACK } from "@core/constants/endpoints";
import { useAppSelector } from "@core/store/redux/hooks";
import { selectRol } from "@features/auth/shared/presentation/store/session/session.selectors";
import imagen from "@shared/assets/img/imagen";
import BadgeStatus from "@shared/components/badges/BadgeStatus";
import type { TableColumn } from "react-data-table-component";
import { FaImages, FaListOl, FaLock, FaUserEdit, FaUserTimes } from "react-icons/fa";
import type { Empleado } from "../../domain/model/empleado.model";
import type { ColumnsEmpleadoProps } from "../types/empleado";

export default function EmpleadoColumns(props: ColumnsEmpleadoProps): TableColumn<Empleado>[] {

   const { cargar, handleDelete, cargarImagen, reset } = props;

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
               <button onClick={() => cargarImagen(row.id!, row.imagen!)} className="rounded-full w-8 h-8 bg-yellow-500 text-white flex justify-center items-center cursor-pointer" title="Cambiar imagen">
                  <FaImages />
               </button>
               <button onClick={() => reset(row.userId!)} className="rounded-full w-8 h-8 bg-green-600 text-white flex justify-center items-center cursor-pointer" title="Restablecer clave">
                  <FaLock />
               </button>
            </div>
         ),
         width: "180px",
      },
      {
         name: "estado",
         cell: (row) => <BadgeStatus status={row.estado} />,
         width: "120px",
      },
      {
         name: "Nombre Completo",
         cell: (row) => (
            <div className="flex items-center space-x-3 w-full">
               <div className="shrink-0">
                  {
                     <img className="w-10 h-10 rounded-full object-cover" src={row.imagen ? URL_BACK + row.imagen : row.sexo == "Femenino" ? imagen.femenino : imagen.masculino} alt="Imagen del" />
                  }
               </div>
               <div className="grow">
                  <div className="text-base font-semibold whitespace-normal">{row.nombre}</div>
                  <div className="font-normal text-gray-500 whitespace-normal">{row.apellidos}</div>
               </div>
            </div>
         ),
         width: "280px",
         style: {
            padding: "10px",
         },
      },
      {
         name: "Cargo",
         cell: (row) => row.cargo,
         width: '180px',
      },
      {
         name: "Identificación",
         selector: (row) => row.documento,
      },
      {
         name: "Correo",
         selector: (row) => row.correo,
         width: "300px",
      },
      {
         name: "Teléfono",
         selector: (row) => row.telefono,
         width: "120px",
      },
   ];
}
