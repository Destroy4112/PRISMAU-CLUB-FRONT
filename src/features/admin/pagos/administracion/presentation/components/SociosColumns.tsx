import BadgeStatus from "@shared/components/badges/BadgeStatus";
import { traslateRol } from "@shared/utilities/convertidores/converters";
import type { TableColumn } from "react-data-table-component";
import { FaCogs, FaDollarSign } from "react-icons/fa";
import type { Socio } from "../../domain/models/socio.model";
import type { SocioColumnsProps } from "../types/administracion";
import { renderEditableCell } from "../utils/socio.column.util";

export default function SociosColumns({ edit, loading, startEdit, cancelEdit, changeEditValue, saveEdit, go }: SocioColumnsProps): TableColumn<Socio>[] {

    return [
        {
            name: (<div className="flex items-center gap-2">
                <FaCogs />
            </div>),
            cell: row => (
                <div className="flex">
                    <button onClick={() => go("mensualidad", row)} className="rounded-full w-8 h-8 bg-pink-600 text-white flex justify-center items-center cursor-pointer" title="Mensualidades">
                        <FaDollarSign />
                    </button>
                    <button onClick={() => go("cuotaBaile", row)} className="rounded-full w-8 h-8 bg-green-500 text-white flex justify-center items-center cursor-pointer" title="Cuotas de baile">
                        <FaDollarSign />
                    </button>
                </div>
            ),
            width: '150px',
        },
        {
            name: "Nombre Completo",
            cell: (row) => (
                <div className="flex items-center space-x-3 w-full">
                    <div className="shrink-0">
                        {<img className="w-10 h-10 rounded-full object-cover" src={row.imagen} alt="Imagen del" />}
                    </div>
                    <div className="grow">
                        <div className="text-base font-semibold whitespace-normal">{row.nombre}</div>
                        <div className="font-normal text-gray-500 whitespace-normal">{row.apellidos}</div>
                    </div>
                </div>
            ),
            width: "250px",
            style: { padding: "10px", },
        },
        {
            name: "Estado",
            cell: (row) => <BadgeStatus status={row.estado} />,
            width: "150px",
        },
        {
            name: "Documento",
            selector: row => row.documento,
            width: '120px'
        },
        {
            name: "Mensualidad",
            cell: row =>
                renderEditableCell({
                    row,
                    edit,
                    loading,
                    field: "mensualidad",
                    title: "Editar mensualidad",
                    startEdit,
                    changeEditValue,
                    saveEdit,
                    cancelEdit,
                }),
        },
        {
            name: "Cuota de baile",
            cell: row =>
                renderEditableCell({
                    row,
                    edit,
                    loading,
                    field: "cuotaBaile",
                    title: "Editar cuota de baile",
                    startEdit,
                    changeEditValue,
                    saveEdit,
                    cancelEdit,
                }),
        },
        {
            name: "Rol",
            cell: row => (
                <span className={`bg-${row.rol === 2 ? 'green' : 'purple'}-100 text-${row.rol === 2 ? 'green' : 'purple'}-800 text-xs font-medium px-2.5 py-0.5 rounded`}>
                    {traslateRol(row.rol)}
                </span>
            )
        }
    ];

}
