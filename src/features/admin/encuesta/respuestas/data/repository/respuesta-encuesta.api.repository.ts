import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { RespuestaEncuesta } from "../../domain/model/respuesta-encuesta.model";
import type { RespuestaEncuestaRepository } from "../../domain/repository/respuesta-encuesta.repository";
import type { RespuestaEncuestaDTO } from "../dto/respuesta-encuesta.dto";
import { respuestaEncuestaDtoToDomain } from "../mapper/respuesta-encuesta.mapper";

const URL = ENDPOINTS.ENCUESTAS;

export class RespuestaEncuestaApiRepository implements RespuestaEncuestaRepository {

    async getAll(id: number): Promise<RespuestaEncuesta[]> {
        const res = await http.get<RespuestaEncuestaDTO[]>(`${URL}/respuestas/${id}`);
        return res.data.map(respuestaEncuestaDtoToDomain);
    }

}