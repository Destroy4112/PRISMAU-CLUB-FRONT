export type ProgramacionID = number; 

export type Programacion = {
    rubro_id: number | null;
    rubro?: string;
    año: string;
    cuotas?: number;
}