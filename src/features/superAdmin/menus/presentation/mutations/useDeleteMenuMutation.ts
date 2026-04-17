import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuUseCases } from "../../application/menu.container";
import type { MenuId } from "../../domain/model/menu.model";
import { menuKeys } from "../queries/menu.keys";

export const useDeleteMenuMutation = createApiMutation<ApiResponseVoid, MenuId>(
    (id) => menuUseCases.delete(id),
    {
        invalidateKeys: [menuKeys.all],
        errorLabel: "Error al eliminar el menu",
    }
);