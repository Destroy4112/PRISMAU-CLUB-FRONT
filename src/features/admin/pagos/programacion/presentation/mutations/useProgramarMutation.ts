import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { programacionUseCases } from "../../application/container/programacion.container";
import type { ProgramacionInput } from "../../application/contracts/programacion.input";
import { programacionKeys } from "../queries/programacion.keys";

export const useProgramarMutation = createApiMutation<ApiResponseVoid, ProgramacionInput>(
   (payload) => programacionUseCases.create(payload),
   {
      invalidateKeys: [programacionKeys.all],
      errorLabel: "Error al crear el programacion",
   }
);