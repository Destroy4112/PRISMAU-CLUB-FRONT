import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/asociado.container";
import type { AsociadoId } from "../../domain/asociado.model";
import { asociadoKeys } from "../queries/asociado.keys";

export const useDeleteImagenAsociadoMutation = createApiMutation<ApiResponseVoid, AsociadoId>(
    (id) => asociadoUseCases.deleteImagen(id),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al eliminar la imagen del asociado",
    }
);