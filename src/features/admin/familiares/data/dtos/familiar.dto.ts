
type FamiliarBase = {
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

export type FamiliarDTO = FamiliarBase & {
   id: number;
   imagen: string | null;
   user_id: number;
}

export type CreateFamiliarDTO = FamiliarBase;

export type UpdateFamiliarDTO = FamiliarBase & {
   id: number,
   user_id?: number
};

export type FamiliarImagenDTO = FormData;