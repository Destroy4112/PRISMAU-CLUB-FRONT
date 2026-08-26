import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponse } from "@shared/constants/response/Response.model";
import { mensualidadUseCases } from "../../application/container/mensualidad.container";
import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import type { PagoMensualidadResponse } from "../../domain/models/mensualidad.response.model";
import { mensualidadKeys } from "../queries/mensualidad.keys";

export const usePayMensualidadMutation = createApiMutation<ApiResponse<PagoMensualidadResponse>, PayMensualidadInput>(
   (payload) => mensualidadUseCases.pay(payload),
   {
      invalidateKeys: [mensualidadKeys.list()],
      errorLabel: "Error al pagar la mensualidad",
   }
);