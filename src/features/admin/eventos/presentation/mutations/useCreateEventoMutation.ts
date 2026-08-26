import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { eventoUseCases } from "../../application/container/evento.container";
import type { CreateEventoInput } from "../../application/contracts/evento.input";
import { eventoKeys } from "../queries/evento.keys";

export const useCreateEventoMutation = createApiMutation<ApiResponseVoid, CreateEventoInput>(
   (payload) => eventoUseCases.create(payload),
   {
      invalidateKeys: [eventoKeys.all],
      errorLabel: "Error al crear el evento",
   }
);