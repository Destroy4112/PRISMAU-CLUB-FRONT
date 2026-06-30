type Espacio = {
    descripcion: string;
    estado: number;
}

export type CreateEspacioInput = Espacio & {
    imagen: File;
};

export type UpdateEspacioInput = Espacio & {
    id: number;
    imagen: File;
}