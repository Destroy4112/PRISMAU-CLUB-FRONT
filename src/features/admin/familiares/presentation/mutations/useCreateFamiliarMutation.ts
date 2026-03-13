import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/familiar.container";
import type { Familiar, FamiliarPayload } from "../../domain/familiar.model";
import { familiarKeys } from "../queries/familiar.keys";

export const useCreateFamiliarMutation = createApiMutation<ApiResponse<Familiar>, FamiliarPayload>(
    (payload) => familiarUseCases.create(payload),
    {
        invalidateKeys: [familiarKeys.all],
        errorLabel: "Error al crear el familiar",
    }
);