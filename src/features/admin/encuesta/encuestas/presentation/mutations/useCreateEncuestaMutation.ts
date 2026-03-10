import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { encuestaUseCases } from "../../application/encuesta.container";
import type { Encuesta, EncuestaPayload } from "../../domain/encuesta.model";
import { encuestaKeys } from "../queries/encuesta.keys";

export const useCreateEncuestaMutation = createApiMutation<ApiResponse<Encuesta>, EncuestaPayload>(
    (payload) => encuestaUseCases.create(payload),
    {
        invalidateKeys: [encuestaKeys.all],
        errorLabel: "Error al crear la encuesta",
    }
);