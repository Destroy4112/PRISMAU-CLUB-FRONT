import BadgeStatusPago from "@shared/components/badges/BadgeStatusPago";
import { formatearMoneda } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import { FaCogs, FaDollarSign, FaEye } from "react-icons/fa";
import type { CuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { CuotasBaileColumns } from "../types/cuotaBaile";

export default function CuotasBaileColumns({ cargar, ver }: CuotasBaileColumns): TableColumn<CuotaBaile>[] {

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
            name: "Descripción",
            cell: row => (
                <div className="flex flex-col py-2 whitespace-nowrap">
                    <span className="font-semibold text-gray-800">
                        {row.descripcion}
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
            name: "Porcentaje",
            cell: row => {
                const porcentajePagado = row.valor > 0 ? (row.abono / row.valor) * 100 : 0;
                return (
                    <div className="w-16">
                        <div className="relative h-2 bg-gray-200 rounded mt-1">
                            <div className="absolute h-full bg-green-500 rounded"
                                style={{ width: `${porcentajePagado}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-gray-500">{`${Math.round(porcentajePagado)}%`}</span>
                    </div>
                );
            },
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
