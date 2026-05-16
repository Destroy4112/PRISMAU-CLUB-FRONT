import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuUseCases } from "../../application/container/menu.container";
import type { MenuInput } from "../../application/contracts/menu.input";
import { menuKeys } from "../queries/menu.keys";

export const useUpdateMenuMutation = createApiMutation<ApiResponseVoid, MenuInput>(
    (payload) => menuUseCases.update(payload),
    {
        invalidateKeys: [menuKeys.all],
        errorLabel: "Error al actualizar el menu",
    }
);