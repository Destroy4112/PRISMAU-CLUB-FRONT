import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { administracionUseCases } from "../../application/container/administracion.container";
import type { UpdateSocioValueInput } from "../../application/contracts/socio.input";
import { administracionKeys } from "../queries/administracion.keys";

export const useUpdateSocioValueMutation = createApiMutation<ApiResponseVoid, UpdateSocioValueInput>(
    (payload) => administracionUseCases.updateSocioValue(payload),
    {
        invalidateKeys: [administracionKeys.list()],
        errorLabel: "Error al actualizar el socio",
    }
);