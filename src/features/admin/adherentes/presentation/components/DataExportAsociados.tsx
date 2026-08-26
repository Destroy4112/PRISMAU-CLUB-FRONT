import type { Asociado } from "@features/admin/asociados/domain/model/asociado.model";

export default function DataExportAsociados(data: Asociado[] | undefined) {
   return data?.map(item => ({
      'Nombre Completo': item.nombre + ' ' + item.apellidos,
      'Identificación': item.tipoDocumento + ' ' + item.documento,
      'Fecha Nacimiento': item.fechaNacimiento,
      'Lugar Nacimiento': item.lugarNacimiento,
      'Email': item.correo,
      'Telefono': item.telefono,
      'Sexo': item.sexo,
      'Dirección Residencia': item.direccionResidencia,
      'Ciudad Residencia': item.ciudadResidencia,
      'Tiempo Residencia': item.tiempoResidencia,
      'Estado Civil': item.estadoCivil,
      'Profesion': item.profesion,
      'Trabajo': item.trabajo,
      'Cargo': item.cargo,
      'Tiempo Servicios': item.tiempoServicio,
      'Telefono Trabajo': item.telOficina,
      'Dirección Trabajo': item.direccionOficina,
      'Ciudad Trabajo': item.ciudadOficina,
   }));
}
