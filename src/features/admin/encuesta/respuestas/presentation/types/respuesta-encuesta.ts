import type { RespuestaEncuesta } from "../../domain/model/respuesta-encuesta.model";

export type RespuestaEncuestaModalKey = "detalle";

export type FormRespuestaEncuestaProps = {
    data: RespuestaEncuesta | null;
}

export type ColumnsRespuestaEncuestaProps = {
    cargar: (row: RespuestaEncuesta) => void;
}