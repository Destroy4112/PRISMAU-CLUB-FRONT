import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { eventoUseCases } from "../../application/container/evento.container";
import { eventoKeys } from "../queries/evento.keys";

export const useDeleteEventoMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => eventoUseCases.delete(id),
    {
        invalidateKeys: [eventoKeys.all],
        errorLabel: "Error al eliminar el evento",
    }
);