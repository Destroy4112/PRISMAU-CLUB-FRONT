import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { encuestaUseCases } from "../../application/encuesta.container";
import type { EncuestaPayload } from "../../domain/payload/encuesta.payload";
import { encuestaKeys } from "../queries/encuesta.keys";

export const useUpdateEncuestaMutation = createApiMutation<ApiResponseVoid, EncuestaPayload>(
    (payload) => encuestaUseCases.update(payload),
    {
        invalidateKeys: [encuestaKeys.all],
        errorLabel: "Error al actualizar la encuesta",
    }
);