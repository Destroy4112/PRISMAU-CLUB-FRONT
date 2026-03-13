import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/familiar.container";
import { familiarKeys } from "../queries/familiar.keys";

export const useDeleteFamiliarMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => familiarUseCases.delete(id),
    {
        invalidateKeys: [familiarKeys.all],
        errorLabel: "Error al eliminar el familiar",
    }
);