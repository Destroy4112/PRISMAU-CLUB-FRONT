import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Login, LoginPayload } from "../domain/login.model";
import type { LoginRepository } from "../domain/login.repository";
import type { LoginApiResponse } from "./auth.api.types";

const URL = ENDPOINTS.AUTH;

export class LoginApiRepository implements LoginRepository {

    async iniciarSesion(payload: LoginPayload): Promise<Login> {
        const res = await http.post<LoginApiResponse>(URL, payload);
        return res.data;
    }

}