import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { rubroUseCases } from "../../application/rubro.container";
import type { RubroPayload } from "../../domain/rubro.model";
import { rubroKeys } from "../queries/rubro.keys";

export const useUpdateRubroMutation = createApiMutation<ApiResponseVoid, RubroPayload>(
    (payload) => rubroUseCases.update(payload),
    {
        invalidateKeys: [rubroKeys.all],
        errorLabel: "Error al actualizar el rubro",
    }
);