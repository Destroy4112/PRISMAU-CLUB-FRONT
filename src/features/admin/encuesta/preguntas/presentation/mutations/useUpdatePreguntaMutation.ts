import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { preguntaUseCases } from "../../application/container/pregunta.container";
import type { PreguntaInput } from "../../application/contracts/pregunta.input";
import { preguntaKeys } from "../queries/pregunta.keys";

export const useUpdatePreguntaMutation = createApiMutation<ApiResponseVoid, PreguntaInput>(
   (payload) => preguntaUseCases.update(payload),
   {
      invalidateKeys: [preguntaKeys.all()],
      errorLabel: "Error al actualizar la pregunta",
   }
);