import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/asociado.container";
import type { AsociadoPayload } from "../../domain/asociado.model";
import { asociadoKeys } from "../queries/asociado.keys";

export const useUpdateAsociadoMutation = createApiMutation<ApiResponseVoid, AsociadoPayload>(
    (payload) => asociadoUseCases.update(payload),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al actualizar el asociado",
    }
);