import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ISolicitud } from '@models/entities/Entity.model';
import type { ApiResponse, PaginatedResponse } from "@models/response/Response.model";
import type { IFilterSolicitud } from "../types/solicitud";

const URL = ENDPOINTS.SOLICITUDES;

export async function getSolicitudes(page = 1, limit = 30, filters: IFilterSolicitud = {}): Promise<PaginatedResponse<ISolicitud>> {
    const res = await http.get<PaginatedResponse<ISolicitud>>(URL, {
        params: { page, limit, ...filters },
    });
    return res.data;
};

export async function responderSolicitud(solicitud: ISolicitud): Promise<ApiResponse<ISolicitud>> {
    const res = await http.put<ApiResponse<ISolicitud>>(`${URL}/${solicitud.id}`, solicitud);
    return res.data;
};

