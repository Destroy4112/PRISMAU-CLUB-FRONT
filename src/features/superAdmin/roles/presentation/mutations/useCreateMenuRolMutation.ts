import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuRolUseCases } from "../../application/menu.container";
import type { MenuRol, MenuRolPayload } from "../../domain/menu-rol.model";
import { menuRolKeys } from "../queries/menu-rol.keys";

export const useCreateMenuRolMutation = createApiMutation<ApiResponse<MenuRol>, MenuRolPayload>(
    (payload) => menuRolUseCases.create(payload),
    {
        invalidateKeys: [menuRolKeys.all],
        errorLabel: "Error al crear el menu",
    }
);