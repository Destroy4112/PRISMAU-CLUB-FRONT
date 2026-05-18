import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { encuestaUseCases } from "../../application/container/encuesta.container";
import type { EncuestaInput } from "../../application/contracts/encuesta.input";
import { encuestaKeys } from "../queries/encuesta.keys";

export const useUpdateEncuestaMutation = createApiMutation<ApiResponseVoid, EncuestaInput>(
    (payload) => encuestaUseCases.update(payload),
    {
        invalidateKeys: [encuestaKeys.all],
        errorLabel: "Error al actualizar la encuesta",
    }
);