import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/container/familiar.container";
import type { UpdateFamiliarInput } from "../../application/contracts/familiar.input";
import { familiarKeys } from "../queries/familiar.keys";

export const useUpdateFamiliarMutation = createApiMutation<ApiResponseVoid, UpdateFamiliarInput>(
    (payload) => familiarUseCases.update(payload),
    {
        invalidateKeys: [familiarKeys.lists()],
        errorLabel: "Error al actualizar el familiar",
    }
);