import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoUseCases } from "../../application/container/asociado.container";
import { asociadoKeys } from "../queries/asociado.keys";

export const useDeleteImagenAsociadoMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => asociadoUseCases.deleteImagen(id),
    {
        invalidateKeys: [asociadoKeys.lists()],
        errorLabel: "Error al eliminar la imagen del asociado",
    }
);