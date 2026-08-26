export type FamiliarId = number;

export interface Familiar {
   id: FamiliarId;
   imagen: string | null;
   user_id: number;
   asociado_id: number | null;
   adherente_id: number | null;
   Nombre: string;
   Apellidos: string;
   Correo: string | null;
   Telefono: string | null;
   FechaNacimiento: string | null;
   LugarNacimiento: string | null;
   TipoDocumento: string;
   Documento: string;
   Sexo: string;
   Codigo: string | null;
   DireccionResidencia: string | null;
   CiudadResidencia: string | null;
   EstadoCivil: string | null;
   Cargo: string | null;
   Parentesco: string;
   Estado: number;
}
