import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/container/familiar.container";
import type { CreateFamiliarInput } from "../../application/contracts/familiar.input";
import type { Familiar } from "../../domain/model/familiar.model";
import { familiarKeys } from "../queries/familiar.keys";

export const useCreateFamiliarMutation = createApiMutation<ApiResponse<Familiar>, CreateFamiliarInput>(
    (payload) => familiarUseCases.create(payload),
    {
        invalidateKeys: [familiarKeys.lists()],
        errorLabel: "Error al crear el familiar",
    }
);