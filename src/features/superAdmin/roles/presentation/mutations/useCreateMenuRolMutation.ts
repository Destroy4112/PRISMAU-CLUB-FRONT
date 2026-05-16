import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { menuRolUseCases } from "../../application/container/menu.container";
import type { MenuRolInput } from "../../application/contracts/menu-rol.input";
import { menuRolKeys } from "../queries/menu-rol.keys";

export const useCreateMenuRolMutation = createApiMutation<ApiResponseVoid, MenuRolInput>(
    (payload) => menuRolUseCases.create(payload),
    {
        invalidateKeys: [menuRolKeys.list()],
        errorLabel: "Error al crear el menu",
    }
);  