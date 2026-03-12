import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/asociado.container";
import type { AsociadoImagenPayload } from "../../domain/asociado.model";
import { asociadoKeys } from "../queries/asociado.keys";

export const useUpdateImagenAsociadoMutation = createApiMutation<ApiResponseVoid, AsociadoImagenPayload>(
    (payload) => asociadoUseCases.updateImagen(payload),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al actualizar la imagen del asociado",
    }
);