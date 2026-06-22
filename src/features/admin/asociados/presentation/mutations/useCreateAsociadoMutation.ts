import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/container/asociado.container";
import type { CreateAsociadoInput } from "../../application/contracts/asociado.input";
import { asociadoKeys } from "../queries/asociado.keys";

export const useCreateAsociadoMutation = createApiMutation<ApiResponseVoid, CreateAsociadoInput>(
    (payload) => asociadoUseCases.create(payload),
    {
        invalidateKeys: [asociadoKeys.lists()],
        errorLabel: "Error al crear el asociado",
    }
);