export type OptionId = number;

export interface Option {
   id: OptionId;
   preguntaId: number;
   respuesta: string;
}