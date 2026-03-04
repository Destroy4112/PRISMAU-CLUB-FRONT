import type { IEstado } from "@models/entities/Entity.model";
import { formatearFechaHora } from "@utils/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";

export default function EstadosColumns(): TableColumn<IEstado>[] {

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
            width: '150px',
        },
        {
            name: "Fecha",
            cell: row => formatearFechaHora(row.created_at!),
        },
        {
            name: "Estado",
            cell: row => row.Estado,
            width: '150px',
        },
        {
            name: "Motivo",
            cell: row => row.Motivo,
        },
    ];
}
