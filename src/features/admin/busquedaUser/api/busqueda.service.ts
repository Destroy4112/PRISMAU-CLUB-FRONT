import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { BusquedaUserResponse } from "../types/busquedaUser";

const URL = ENDPOINTS.USUARIO;

export async function getUserByDocumento(documento: string): Promise<BusquedaUserResponse> {
    try {
        const res = await http.get<BusquedaUserResponse>(`${URL}/${documento}`);
        return res.data;
    } catch (e) {
        throw e;
    }
};