type EspacioBase = {
    Descripcion: string;
    Estado: number;
}

export type EspacioDTO = EspacioBase & {
    id: number;
    imagen: string;
}

export type EspacioCreateDTO = EspacioBase & {
    imagen: File;
};

export type EspacioUpdateDTO = EspacioBase & {
    id: number;
    imagen?: File;
}