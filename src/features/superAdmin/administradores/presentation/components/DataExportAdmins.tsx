import type { Administrador } from "../../domain/models/administrador.model";

export default function DataExportAdmins(data: Administrador[] | undefined) {
   return data?.map(item => ({
      Nombre: item.nombre + " " + item.apellidos,
      Usuario: item.user.documento,
      Email: item.correo,
      Telefono: item.telefono,
   }));
}
