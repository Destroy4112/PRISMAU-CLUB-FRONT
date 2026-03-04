import type { IAdherente, IAsociado, IFamiliar } from "@models/usuario/Usuario.model"

export interface IReserva {
    id?: number
    user_id: number
    espacio_id: number
    Fecha: string
    Inicio: string
    Fin: string
    created_at: string
    updated_at: string
    usuario?: IAsociado | IAdherente
    espacio?: IEspacio
}

export interface ISolicitud {
    id?: number;
    Descripcion: string;
    Tipo: string;
    user_id: number;
    Respuesta: string;
    Estado: number;
    usuario?: IAsociado | IAdherente;
    created_at: string
    updated_at: string
}

export interface IContrato {
    id?: number,
    Nombres: string;
    Apellidos: string;
    Identificacion: string;
    Correo: string;
    Telefono: string;
    Empresa: string;
    Ciudad: string;
    Estado: string;
    created_at: string
    updated_at: string
};

export interface IMenu {
    id?: number;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: number;
};

export interface IMenuRol {
    id?: number;
    menu_id: number;
    role_id: number;
};

export interface IMenuRoles {
    id: number;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: string;
    menuRolId: number;
}

export interface IEspacio {
    id?: number;
    imagen: string;
    Descripcion: string;
    Estado: number;
    created_at?: string
    updated_at?: string
}

export interface IEncuesta {
    id?: number
    Titulo: string
    Descripcion: string
    Estado: number
    created_at?: string
    updated_at?: string
    preguntas_count?: number
}

export interface IPregunta {
    id?: number;
    encuesta_id: number;
    Pregunta: string;
    created_at?: string;
    updated_at?: string
}

export interface IRespuesta {
    id?: number;
    pregunta_id: number;
    Respuesta: string;
    created_at?: string;
    updated_at?: string
}

export interface IEvento {
    id?: number;
    Titulo: string;
    Descripcion: string;
    Tipo: string;
    Imagen?: string;
    Vencimiento: string;
    Fecha: string;
    Hora: string;
    Destinatario: string;
    Correo: boolean;
    Push: boolean;
    created_at?: string;
    updated_at?: string
}

export interface IInvitacion {
    id?: number;
    user_id: number;
    Nombre: string;
    Apellidos: string;
    Telefono: string;
    TipoDocumento: string;
    Documento: string;
    Status: boolean;
    usuario?: IAsociado | IAdherente | IFamiliar;
    created_at?: string;
    updated_at?: string;
}

export interface IAcceso {
    id?: number;
    user_id: number;
    usuario?: IAsociado | IAdherente | IFamiliar;
    created_at?: string;
    updated_at?: string;
}

export interface IEstado {
    id?: number;
    user_id: number;
    Estado: string;
    Motivo: string;
    usuario?: IAsociado | IAdherente | IFamiliar;
    created_at?: string;
    updated_at?: string;
}

export interface IProgramacionPagos {
    rubro_id: number | null;
    rubro?: string;
    año: string;
    cuotas?: number;
}