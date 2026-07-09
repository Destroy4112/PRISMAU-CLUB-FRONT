import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { mensualidadUseCases } from "../../application/container/mensualidad.container";
import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import { mensualidadKeys } from "../queries/mensualidad.keys";

export const usePayMensualidadMutation = createApiMutation<ApiResponseVoid, PayMensualidadInput>(
    (payload) => mensualidadUseCases.pay(payload),
    {
        invalidateKeys: [mensualidadKeys.list()],
        errorLabel: "Error al pagar la mensualidad",
    }
);