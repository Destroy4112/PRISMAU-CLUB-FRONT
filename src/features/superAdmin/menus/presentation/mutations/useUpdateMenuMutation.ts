import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuUseCases } from "../../application/menu.container";
import type { MenuPayload } from "../../domain/menu.model";
import { menuKeys } from "../queries/menu.keys";

export const useUpdateMenuMutation = createApiMutation<ApiResponseVoid, MenuPayload>(
    (payload) => menuUseCases.update(payload),
    {
        invalidateKeys: [menuKeys.all],
        errorLabel: "Error al actualizar el menu",
    }
);