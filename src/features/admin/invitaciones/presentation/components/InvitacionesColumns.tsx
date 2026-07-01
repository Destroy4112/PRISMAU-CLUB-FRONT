import { formatearFecha } from "@shared/utilities/convertidores/normalizeText";
import { Badge } from "flowbite-react";
import type { TableColumn } from "react-data-table-component";
import type { Invitacion } from "../../domain/models/invitacion.model";

export default function InvitacionesColumns(): TableColumn<Invitacion>[] {

    return [
        {
            name: "N°",
            cell: (_row, i) => i + 1,
            width: '60px',
        },
        {
            name: "Fecha",
            cell: row => formatearFecha(row.createdAt),
            width: '120px',
        },
        {
            name: "Estado",
            cell: row => (
                <div>
                    <Badge color={row.Status ? "green" : "yellow"}>{row.Status ? "Entró" : "No Entró"}</Badge>
                </div>
            ),
            width: '120px',
        },
        {
            name: "Nombre Completo",
            cell: row => row.Nombre + " " + row.Apellidos,
            width: '310px',
        },
        {
            name: "Identificación",
            cell: row => row.Documento,
            width: '150px',
        },
        {
            name: "Invitado Por",
            cell: row => row.usuario?.Nombre + " " + row.usuario?.Apellidos,
        }
    ];
}
