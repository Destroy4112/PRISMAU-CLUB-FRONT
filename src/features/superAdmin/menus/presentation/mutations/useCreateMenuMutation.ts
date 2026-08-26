import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { menuUseCases } from "../../application/container/menu.container";
import type { MenuInput } from "../../application/contracts/menu.input";
import { menuKeys } from "../queries/menu.keys";

export const useCreateMenuMutation = createApiMutation<ApiResponseVoid, MenuInput>(
   (payload) => menuUseCases.create(payload),
   {
      invalidateKeys: [menuKeys.all],
      errorLabel: "Error al crear el menu",
   }
);