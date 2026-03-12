import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/asociado.container";
import type { AsociadoEstadoPayload } from "../../domain/asociado.model";
import { asociadoKeys } from "../queries/asociado.keys";

export const useUpdateStatusAsociadoMutation = createApiMutation<ApiResponseVoid, AsociadoEstadoPayload>(
    (payload) => asociadoUseCases.updateEstado(payload),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al actualizar el status del asociado",
    }
);