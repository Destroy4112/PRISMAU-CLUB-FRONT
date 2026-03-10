import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { preguntaUseCases } from "../../application/pregunta.container";
import type { PreguntaPayload } from "../../domain/pregunta.model";
import { preguntaKeys } from "../queries/pregunta.keys";

export const useUpdatePreguntaMutation = createApiMutation<ApiResponseVoid, PreguntaPayload>(
    (payload) => preguntaUseCases.update(payload),
    {
        invalidateKeys: [preguntaKeys.all],
        errorLabel: "Error al actualizar la pregunta",
    }
);