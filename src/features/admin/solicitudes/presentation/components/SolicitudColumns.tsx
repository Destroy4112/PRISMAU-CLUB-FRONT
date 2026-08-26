import BadgeStatusSolicitud from "@shared/components/badges/BadgeStatusSolicitud";
import { formatearFecha } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import { FaComment, FaEye, FaListOl } from "react-icons/fa";
import type { Solicitud } from "../../domain/models/solicitud.model";

export default function SolicitudColumns({ cargarSolicitud }: any): TableColumn<Solicitud>[] {

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
               <button onClick={() => cargarSolicitud(row)} className={`rounded-full w-8 h-8 ${row.estado === 0 ? 'bg-green-600' : 'bg-orange-400'} text-white flex justify-center items-center cursor-pointer`} title='Responder' >
                  {row.estado == 0 ? <FaEye /> : <FaComment />}
               </button>
            </div>
         ),
         width: '90px',
      },
      {
         name: "Estado",
         cell: row => <BadgeStatusSolicitud status={row.estado} />,
         width: '130px',
      },
      {
         name: "Solicitante",
         cell: row => row.usuario?.Nombre + " " + row.usuario?.Apellidos,
         width: '300px'
      },
      {
         name: "Tipo de solicitud",
         selector: row => row.tipo,
      },
      {
         name: "Fecha",
         cell: row => formatearFecha(row.createdAt),
         width: '120px',
      },
   ];
}
