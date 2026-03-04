import type { IContrato } from "@models/entities/Entity.model";
import { formatearFecha } from "@utils/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";

export default function ContratacionesColumn(): TableColumn<IContrato>[] {

    return [
        {
            name: "N°",
            cell: (_row, i) => i + 1,
            width: '60px',
        },
        {
            name: "Nombre Completo",
            cell: row => row.Nombres + " " + row.Apellidos,
            width: '310px',
        },
        {
            name: "Identificación",
            selector: row => row.Identificacion,
            width: '150px',
        },
        {
            name: "Empresa",
            cell: row => row.Empresa,
            width: '200px'
        },
        {
            name: "Correo",
            cell: row => row.Correo,
            width: '300px'
        },
        {
            name: "Telefono",
            selector: row => row.Telefono,
        },
        {
            name: "Fecha",
            cell: row => formatearFecha(row.created_at),
            width: '120px',
        },
    ];
}
