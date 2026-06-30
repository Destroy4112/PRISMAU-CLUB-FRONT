import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarUseCases } from "../../application/container/familiar.container";
import { familiarKeys } from "../queries/familiar.keys";

export const useDeleteImagenFamiliarMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => familiarUseCases.deleteImagen(id),
    {
        invalidateKeys: [familiarKeys.lists()],
        errorLabel: "Error al eliminar la imagen del familiar",
    }
);