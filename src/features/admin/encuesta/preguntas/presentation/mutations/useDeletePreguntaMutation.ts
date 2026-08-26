import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { preguntaUseCases } from "../../application/container/pregunta.container";
import type { PreguntaId } from "../../domain/model/pregunta.model";
import { preguntaKeys } from "../queries/pregunta.keys";

export const useDeletePreguntaMutation = createApiMutation<ApiResponseVoid, PreguntaId>(
   (id) => preguntaUseCases.delete(id),
   {
      invalidateKeys: [preguntaKeys.all()],
      errorLabel: "Error al eliminar la pregunta",
   }
);