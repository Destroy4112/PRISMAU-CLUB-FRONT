import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/container/familiar.container";
import type { FamiliarImagenInput } from "../../application/contracts/familiar.input";
import { familiarKeys } from "../queries/familiar.keys";

export const useUpdateImagenFamiliarMutation = createApiMutation<ApiResponseVoid, FamiliarImagenInput>(
    (payload) => familiarUseCases.updateImagen(payload),
    {
        invalidateKeys: [familiarKeys.lists()],
        errorLabel: "Error al actualizar la imagen del familiar",
    }
);