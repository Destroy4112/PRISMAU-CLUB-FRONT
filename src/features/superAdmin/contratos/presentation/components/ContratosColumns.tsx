import { formatearFecha } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import type { Contrato } from "../../domain/models/contrato.model";

export default function ContratacionesColumn(): TableColumn<Contrato>[] {

   return [
      {
         name: "N°",
         cell: (_row, i) => i + 1,
         width: '60px',
      },
      {
         name: "Nombre Completo",
         cell: row => row.nombres + " " + row.apellidos,
         width: '310px',
      },
      {
         name: "Identificación",
         selector: row => row.identificacion,
         width: '150px',
      },
      {
         name: "Empresa",
         cell: row => row.empresa,
         width: '200px'
      },
      {
         name: "Correo",
         cell: row => row.correo,
         width: '300px'
      },
      {
         name: "Telefono",
         selector: row => row.telefono,
      },
      {
         name: "Fecha",
         cell: row => formatearFecha(row.createdAt),
         width: '120px',
      },
   ];
}
