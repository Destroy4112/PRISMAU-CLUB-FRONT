import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { rubroUseCases } from "../../application/container/rubro.container";
import type { RubroId } from "../../domain/model/rubro.model";
import { rubroKeys } from "../queries/rubro.keys";

export const useDeleteRubroMutation = createApiMutation<ApiResponseVoid, RubroId>(
    (id) => rubroUseCases.delete(id),
    {
        invalidateKeys: [rubroKeys.all],
        errorLabel: "Error al eliminar el rubro",
    }
);