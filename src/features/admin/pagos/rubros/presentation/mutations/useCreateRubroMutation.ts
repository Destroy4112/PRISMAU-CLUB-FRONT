import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { rubroUseCases } from "../../application/rubro.container";
import type { Rubro, RubroPayload } from "../../domain/rubro.model";
import { rubroKeys } from "../queries/rubro.keys";

export const useCreateRubroMutation = createApiMutation<ApiResponse<Rubro>, RubroPayload>(
    (payload) => rubroUseCases.create(payload),
    {
        invalidateKeys: [rubroKeys.all],
        errorLabel: "Error al crear el rubro",
    }
);