import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { preguntaUseCases } from "../../application/pregunta.container";
import type { PreguntaPayload } from "../../domain/payload/pregunta.payload";
import { preguntaKeys } from "../queries/pregunta.keys";

export const useCreatePreguntaMutation = createApiMutation<ApiResponseVoid, PreguntaPayload>(
    (payload) => preguntaUseCases.create(payload),
    {
        invalidateKeys: [preguntaKeys.all],
        errorLabel: "Error al crear la pregunta",
    }
);