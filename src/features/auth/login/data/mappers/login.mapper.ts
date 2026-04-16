import type { LoginPayload } from "../../domain/payload/login.payload";
import type { LoginDto } from "../dtos/login.dto";

export function loginPayloadToDto(data: LoginPayload): LoginDto {
    return {
        Documento: data.documento,
        password: data.password,
    };
}