import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { rubroUseCases } from "../../application/container/rubro.container";
import type { UpdateRubroInput } from "../../application/contracts/rubro.input";
import { rubroKeys } from "../queries/rubro.keys";

export const useUpdateRubroMutation = createApiMutation<ApiResponseVoid, UpdateRubroInput>(
    (payload) => rubroUseCases.update(payload),
    {
        invalidateKeys: [rubroKeys.all],
        errorLabel: "Error al actualizar el rubro",
    }
);