import { formatearFechaHora } from "@shared/utilities/convertidores/normalizeText";
import type { TableColumn } from "react-data-table-component";
import type { Acceso } from "../../domain/models/acceso.model";

export default function AccesosColumns(): TableColumn<Acceso>[] {

   return [
      {
         name: "N°",
         cell: (_row, i) => i + 1,
         width: '60px',
      },
      {
         name: "Nombre Completo",
         cell: row => row.usuario.Nombre + " " + row.usuario.Apellidos,
      },
      {
         name: "Identificación",
         cell: row => row.usuario.Documento,
      },
      {
         name: "Fecha",
         cell: row => formatearFechaHora(row.createdAt),
      },
   ];
}