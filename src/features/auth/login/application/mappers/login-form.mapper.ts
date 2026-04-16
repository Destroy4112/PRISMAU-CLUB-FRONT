import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { LoginPayload } from "../../domain/payload/login.payload";
import type { LoginForm } from "../../presentation/types/login.form";

export const loginFormToPayload = (login: LoginForm): LoginPayload => {
    return {
        documento: safeTrim(login.documento),
        password: safeTrim(login.password),
    };
};