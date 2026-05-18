import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { encuestaUseCases } from "../../application/container/encuesta.container";
import type { EncuestaId } from "../../domain/model/encuesta.model";
import { encuestaKeys } from "../queries/encuesta.keys";

export const useDeleteEncuestaMutation = createApiMutation<ApiResponseVoid, EncuestaId>(
    (id) => encuestaUseCases.delete(id),
    {
        invalidateKeys: [encuestaKeys.all],
        errorLabel: "Error al eliminar la encuesta",
    }
);