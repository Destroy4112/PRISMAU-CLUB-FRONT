import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Finanza } from "../../domain/model/finanza.model";
import type { FinanzaRepository } from "../../domain/repository/finanza.repository";
import type { FinanzaDto } from "../dto/finanza.dto";
import { finanzaDtoToDomain } from "../mapper/finanza.mapper";

const URL = ENDPOINTS.USUARIO;

export class FinanzaApiRepository implements FinanzaRepository {
    async getFinanza(): Promise<Finanza> {
        const res = await http.get<FinanzaDto>(`${URL}/contabilidad`);
        return finanzaDtoToDomain(res.data);
    }
}