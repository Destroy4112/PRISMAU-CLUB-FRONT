import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { rubroUseCases } from "../../application/container/rubro.container";
import type { CreateRubroInput } from "../../application/contracts/rubro.input";
import { rubroKeys } from "../queries/rubro.keys";

export const useCreateRubroMutation = createApiMutation<ApiResponseVoid, CreateRubroInput>(
    (payload) => rubroUseCases.create(payload),
    {
        invalidateKeys: [rubroKeys.all],
        errorLabel: "Error al crear el rubro",
    }
);