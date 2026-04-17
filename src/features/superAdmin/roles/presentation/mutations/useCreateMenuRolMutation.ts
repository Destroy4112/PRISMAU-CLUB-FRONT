import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuRolUseCases } from "../../application/menu.container";
import type { MenuRolPayload } from "../../domain/payload/menu-rol.payload";
import { menuRolKeys } from "../queries/menu-rol.keys";

export const useCreateMenuRolMutation = createApiMutation<ApiResponseVoid, MenuRolPayload>(
    (payload) => menuRolUseCases.create(payload),
    {
        invalidateKeys: [menuRolKeys.all],
        errorLabel: "Error al crear el menu",
    }
);