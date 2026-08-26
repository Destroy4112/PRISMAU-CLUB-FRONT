import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { menuUseCases } from "../../application/container/menu.container";
import type { MenuId } from "../../domain/model/menu.model";
import { menuKeys } from "../queries/menu.keys";

export const useDeleteMenuMutation = createApiMutation<ApiResponseVoid, MenuId>(
   (id) => menuUseCases.delete(id),
   {
      invalidateKeys: [menuKeys.all],
      errorLabel: "Error al eliminar el menu",
   }
);