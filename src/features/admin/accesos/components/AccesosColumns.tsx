import type { IAcceso } from "@models/entities/Entity.model";
import { formatearFechaHora } from "@utils/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";

export default function AccesosColumns(): TableColumn<IAcceso>[] {

    return [
        {
            name: "N°",
            cell: (_row, i) => i + 1,
            width: '60px',
        },
        {
            name: "Nombre Completo",
            cell: row => row.usuario?.Nombre + " " + row.usuario?.Apellidos,
        },
        {
            name: "Identificación",
            cell: row => row.usuario?.Documento,
        },
        {
            name: "Fecha",
            cell: row => formatearFechaHora(row.created_at!),
        },
    ];
}
