export type AdministradorForm = {
    Nombre: string;
    Apellidos: string;
    user: { id?: number, Documento: string, password?: string };
    Correo: string;
    Telefono: string;
};

export const ADMINISTRADOR_FORM_INITIAL: AdministradorForm = {
    Nombre: "",
    Apellidos: "",
    user: { id: undefined, Documento: "", password: "" },
    Correo: "",
    Telefono: "",
};