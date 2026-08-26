export type EntityType = | "ASOCIADO" | "ADHERENTE" | "FAMILIAR" | "EMPLEADO";

export type BusquedaUserResponse =
   | { status: true; data: DataResultSearch }
   | { status: false; message: string };

export type DataResultSearch = {
   tipo: EntityType;
   principal: SearchPersonBase;
   relacionado: SearchPersonBase | null;
};

export type SearchPersonBase = {
   id: number;
   imagen: string | null;
   nombreCompleto: string;
   userId: number;
   correo: string;
   telefono: string;
   tipoDocumento: string;
   documento: string;
   sexo: string;
   codigo: string | null;
   cargo: string | null;
   estado: number;
};