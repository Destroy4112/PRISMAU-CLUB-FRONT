import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuRolUseCases } from "../../application/menu.container";
import type { MenuRolId } from "../../domain/menu-rol.model";
import { menuRolKeys } from "../queries/menu-rol.keys";

export const useDeleteMenuRolMutation = createApiMutation<ApiResponseVoid, MenuRolId>(
    (id) => menuRolUseCases.delete(id),
    {
        invalidateKeys: [menuRolKeys.all],
        errorLabel: "Error al eliminar el menu",
    }
);