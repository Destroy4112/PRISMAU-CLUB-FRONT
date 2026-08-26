import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { LoginInput } from "../../application/contracts/login.input";
import type { LoginForm } from "../../presentation/types/login.form";

export const loginFormToPayload = (login: LoginForm): LoginInput => {
   return {
      documento: safeTrim(login.documento),
      password: safeTrim(login.password),
   };
};