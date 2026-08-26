export interface UsuarioDetail {
   id: number;
   user_id: number;
   Nombre: string;
   Apellidos: string;
   Documento: string;
   imagen: string;
   Correo: string;
   Telefono: string;
   Sexo: string;
   rol: number;
}

export interface SocioDetail {
   id: number;
   user_id: number;
   Nombre: string;
   Apellidos: string;
   Documento: string;
   imagen: string;
   Correo: string;
   Telefono: string;
   Sexo: string;
   Codigo: string;
   Estado: number;
}