import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/familiar.container";
import type { FamiliarPayload } from "../../domain/familiar.model";
import { familiarKeys } from "../queries/familiar.keys";

export const useUpdateFamiliarMutation = createApiMutation<ApiResponseVoid, FamiliarPayload>(
    (payload) => familiarUseCases.update(payload),
    {
        invalidateKeys: [familiarKeys.all],
        errorLabel: "Error al actualizar el familiar",
    }
);