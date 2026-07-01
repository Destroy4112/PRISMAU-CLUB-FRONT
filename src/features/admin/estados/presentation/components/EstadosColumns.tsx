import { formatearFechaHora } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import type { Estado } from "../../domain/models/estado.model";

export default function EstadosColumns(): TableColumn<Estado>[] {

    return [
        {
            name: "N°",
            cell: (_row, i) => i + 1,
            width: '60px',
        },
        {
            name: "Nombre Completo",
            cell: row => `${row.usuario.Nombre} ${row.usuario.Apellidos}`,
        },
        {
            name: "Identificación",
            cell: row => row.usuario.Documento,
            width: '150px',
        },
        {
            name: "Fecha",
            cell: row => formatearFechaHora(row.createdAt),
        },
        {
            name: "Estado",
            cell: row => row.estado,
            width: '150px',
        },
        {
            name: "Motivo",
            cell: row => row.motivo,
        },
    ];
}
