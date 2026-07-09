import BadgeStatusPago from "@shared/components/badges/BadgeStatusPago";
import { formatearFechaMesAnio, formatearMoneda } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import { FaCogs, FaDollarSign, FaEye } from "react-icons/fa";
import type { Mensualidad } from "../../domain/models/mensualidad.model";
import type { MensualidadesColumns } from "../types/mensualidad";

export default function MensualidadesColumns({ cargar, ver }: MensualidadesColumns): TableColumn<Mensualidad>[] {

    return [
        {
            name: <FaCogs />,
            cell: (row) => (
                <div className="flex">
                    {!row.estado ?
                        <button onClick={() => cargar(row)} className="rounded-full w-8 h-8 bg-pink-600 text-white flex justify-center items-center cursor-pointer" title="Editar">
                            <FaDollarSign />
                        </button> :
                        <button onClick={() => ver(row)} className="rounded-full w-8 h-8 bg-green-500 text-white flex justify-center items-center cursor-pointer" title="Editar">
                            <FaEye />
                        </button>
                    }
                </div>
            ),
        },
        {
            name: "Mes",
            cell: row => (
                <div className="flex flex-col py-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-800">
                        {formatearFechaMesAnio(row.fecha)}
                    </span>

                    <span className="mt-1 inline-flex w-fit items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        Factura #{row.id ?? "Sin factura"}
                    </span>
                </div>
            )
        },
        {
            name: "Estado",
            cell: row => (<BadgeStatusPago status={row.estado} />)
        },
        {
            name: "Valor",
            selector: row => formatearMoneda(row.valor),
        },
        {
            name: "Saldo",
            cell: row => {
                return (
                    <div className="flex flex-col w-full">
                        <span className={row.restante > 0 ? "font-bold text-red-600" : "font-bold text-green-700"}>
                            {row.restante > 0 ? formatearMoneda(row.restante) : "Pagado"}
                        </span>
                        <span className="text-xs text-gray-400">
                            {row.restante > 0 ? "Pendiente" : "Sin deuda"}
                        </span>
                    </div>
                );
            },
        },
    ];

}
