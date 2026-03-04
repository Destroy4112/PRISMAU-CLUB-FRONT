import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuUseCases } from "../../application/menu.container";
import type { Menu, MenuPayload } from "../../domain/menu.model";
import { menuKeys } from "../queries/menu.keys";

export const useCreateMenuMutation = createApiMutation<ApiResponse<Menu>, MenuPayload>(
    (payload) => menuUseCases.create(payload),
    {
        invalidateKeys: [menuKeys.all],
        errorLabel: "Error al crear el menu",
    }
);