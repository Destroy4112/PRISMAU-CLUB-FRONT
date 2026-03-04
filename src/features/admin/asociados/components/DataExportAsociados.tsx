import type { IAsociado } from "@models/usuario/Usuario.model";

export default function DataExportAsociados(data: IAsociado[] | undefined) {
    return data?.map(item => ({
        'Nombre Completo': item.Nombre + ' ' + item.Apellidos,
        'Identificación': item.TipoDocumento + ' ' + item.Documento,
        'Fecha Nacimiento': item.FechaNacimiento,
        'Lugar Nacimiento': item.LugarNacimiento,
        'Email': item.Correo,
        'Telefono': item.Telefono,
        'Sexo': item.Sexo,
        'Dirección Residencia': item.DireccionResidencia,
        'Ciudad Residencia': item.CiudadResidencia,
        'Tiempo Residencia': item.TiempoResidencia,
        'Estado Civil': item.EstadoCivil,
        'Profesion': item.Profesion,
        'Trabajo': item.Trabajo,
        'Cargo': item.Cargo,
        'Tiempo Servicios': item.TiempoServicio,
        'Telefono Trabajo': item.TelOficina,
        'Dirección Trabajo': item.DireccionOficina,
        'Ciudad Trabajo': item.CiudadOficina,
    }));
}
