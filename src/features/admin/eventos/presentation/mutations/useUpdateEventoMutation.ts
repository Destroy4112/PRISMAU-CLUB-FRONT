import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { eventoUseCases } from "../../application/container/evento.container";
import type { UpdateEventoInput } from "../../application/contracts/evento.input";
import { eventoKeys } from "../queries/evento.keys";

export const useUpdateEventoMutation = createApiMutation<ApiResponseVoid, UpdateEventoInput>(
   (payload) => eventoUseCases.update(payload),
   {
      invalidateKeys: [eventoKeys.all],
      errorLabel: "Error al actualizar el evento",
   }
);