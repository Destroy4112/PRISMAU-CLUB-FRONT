import type { ISolicitud } from '@models/entities/Entity.model';
import { formatearFecha } from "@utils/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import { FaComment, FaEye, FaListOl } from "react-icons/fa";

export default function SolicitudColumns({ cargarSolicitud }: any): TableColumn<ISolicitud>[] {

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
                    <button onClick={() => cargarSolicitud(row)} className={`rounded-full w-8 h-8 ${row.Estado === 0 ? 'bg-green-600' : 'bg-orange-400'} text-white flex justify-center items-center cursor-pointer`} title='Responder' >
                        {row.Estado == 0 ? <FaEye /> : <FaComment />}
                    </button>
                </div>
            ),
            width: '90px',
        },
        {
            name: "Estado",
            cell: row => (
                <div className="flex items-center">
                    <div className={`h-2.5 w-2.5 rounded-full ${row.Estado == 0 ? 'bg-green-500' : 'bg-orange-500'} mr-2`}></div>
                    {row.Estado == 0 ? "Aprobada" : "Pendiente"}
                </div>
            ),
            width: '130px',
        },
        {
            name: "Solicitante",
            cell: row => row.usuario?.Nombre + " " + row.usuario?.Apellidos,
            width: '300px'
        },
        {
            name: "Tipo de solicitud",
            selector: row => row.Tipo,
        },
        {
            name: "Fecha",
            cell: row => formatearFecha(row.created_at),
            width: '120px',
        },
    ];
}
