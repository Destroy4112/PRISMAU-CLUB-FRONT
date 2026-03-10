import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { preguntaUseCases } from "../../application/pregunta.container";
import type { Pregunta, PreguntaPayload } from "../../domain/pregunta.model";
import { preguntaKeys } from "../queries/pregunta.keys";

export const useCreatePreguntaMutation = createApiMutation<ApiResponse<Pregunta>, PreguntaPayload>(
    (payload) => preguntaUseCases.create(payload),
    {
        invalidateKeys: [preguntaKeys.all],
        errorLabel: "Error al crear la pregunta",
    }
);