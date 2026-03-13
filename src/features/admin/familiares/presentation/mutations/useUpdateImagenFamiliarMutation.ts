import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/familiar.container";
import type { FamiliarImagenPayload } from "../../domain/familiar.model";
import { familiarKeys } from "../queries/familiar.keys";

export const useUpdateImagenFamiliarMutation = createApiMutation<ApiResponseVoid, FamiliarImagenPayload>(
    (payload) => familiarUseCases.updateImagen(payload),
    {
        invalidateKeys: [familiarKeys.all],
        errorLabel: "Error al actualizar la imagen del familiar",
    }
);