import { formatearFecha } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import type { Contrato } from "../../domain/contrato.model";

export default function ContratacionesColumn(): TableColumn<Contrato>[] {

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
            cell: row => formatearFecha(row.createdAt!),
            width: '120px',
        },
    ];
}
