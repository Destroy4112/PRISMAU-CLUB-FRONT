import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { menuRolUseCases } from "../../application/container/menu.container";
import { menuRolKeys } from "../queries/menu-rol.keys";

export const useDeleteMenuRolMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => menuRolUseCases.delete(id),
   {
      invalidateKeys: [menuRolKeys.list()],
      errorLabel: "Error al eliminar el menu",
   }
);