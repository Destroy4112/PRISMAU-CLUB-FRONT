import type { LoginInput } from "../../application/contracts/login.input";
import type { LoginDto } from "../dtos/login.dto";

export function loginPayloadToDto(data: LoginInput): LoginDto {
   return {
      Documento: data.documento,
      password: data.password,
   };
}