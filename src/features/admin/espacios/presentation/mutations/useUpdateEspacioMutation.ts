import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { espacioUseCases } from "../../application/container/espacio.container";
import type { UpdateEspacioInput } from "../../application/contracts/espacio.input";
import { espacioKeys } from "../queries/espacio.keys";

export const useUpdateEspacioMutation = createApiMutation<ApiResponseVoid, UpdateEspacioInput>(
    (payload) => espacioUseCases.update(payload),
    {
        invalidateKeys: [espacioKeys.lists()],
        errorLabel: "Error al actualizar el espacio",
    }
);