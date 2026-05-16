import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/container/asociado.container";
import { asociadoKeys } from "../queries/asociado.keys";

export const useDeleteAsociadoMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => asociadoUseCases.delete(id),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al eliminar el asociado",
    }
);