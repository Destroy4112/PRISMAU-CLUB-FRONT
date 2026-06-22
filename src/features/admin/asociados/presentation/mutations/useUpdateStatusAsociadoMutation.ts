import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/container/asociado.container";
import type { AsociadoEstadoInput } from "../../application/contracts/asociado.input";
import { asociadoKeys } from "../queries/asociado.keys";

export const useUpdateStatusAsociadoMutation = createApiMutation<ApiResponseVoid, AsociadoEstadoInput>(
    (payload) => asociadoUseCases.updateEstado(payload),
    {
        invalidateKeys: [asociadoKeys.lists()],
        errorLabel: "Error al actualizar el status del asociado",
    }
);