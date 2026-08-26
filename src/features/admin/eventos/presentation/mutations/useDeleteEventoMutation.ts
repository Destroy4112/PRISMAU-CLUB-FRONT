import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { eventoUseCases } from "../../application/container/evento.container";
import { eventoKeys } from "../queries/evento.keys";

export const useDeleteEventoMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => eventoUseCases.delete(id),
   {
      invalidateKeys: [eventoKeys.all],
      errorLabel: "Error al eliminar el evento",
   }
);