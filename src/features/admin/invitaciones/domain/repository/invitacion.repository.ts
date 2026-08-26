import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Invitacion } from "../models/invitacion.model";

export interface InvitacionRepository {
   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Invitacion>>;
}