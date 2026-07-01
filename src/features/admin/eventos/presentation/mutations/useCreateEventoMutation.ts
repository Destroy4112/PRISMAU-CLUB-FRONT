import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { eventoUseCases } from "../../application/container/evento.container";
import type { CreateEventoInput } from "../../application/contracts/evento.input";
import type { Evento } from "../../domain/model/evento.model";
import { eventoKeys } from "../queries/evento.keys";

export const useCreateEventoMutation = createApiMutation<ApiResponse<Evento>, CreateEventoInput>(
    (payload) => eventoUseCases.create(payload),
    {
        invalidateKeys: [eventoKeys.all],
        errorLabel: "Error al crear el evento",
    }
);