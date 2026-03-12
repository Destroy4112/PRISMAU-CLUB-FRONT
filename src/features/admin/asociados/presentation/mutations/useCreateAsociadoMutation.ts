import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/asociado.container";
import type { Asociado, AsociadoPayload } from "../../domain/asociado.model";
import { asociadoKeys } from "../queries/asociado.keys";

export const useCreateAsociadoMutation = createApiMutation<ApiResponse<Asociado>, AsociadoPayload>(
    (payload) => asociadoUseCases.create(payload),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al crear el asociado",
    }
);