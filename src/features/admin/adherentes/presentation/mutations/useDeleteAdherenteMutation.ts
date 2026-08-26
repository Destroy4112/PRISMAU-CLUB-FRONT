import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@core/store/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import { adherenteKeys } from "../queries/adherente.keys";

export const useDeleteAdherenteMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => adherenteUseCases.delete(id),
   {
      invalidateKeys: [adherenteKeys.lists()],
      errorLabel: "Error al eliminar el adherente",
   }
);