import type { Administrador } from "../../domain/administrador.model";

export default function DataExportAdmins(data: Administrador[] | undefined) {
    return data?.map(item => ({
        'Nombre Completo': item.Nombre + " " + item.Apellidos,
        'Usuario': item.user.Documento,
        'Email': item.Correo,
        'Teléfono': item.Telefono,
    }));
}
