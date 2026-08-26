import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@core/store/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import { adherenteKeys } from "../queries/adherente.keys";

export const useDeleteImagenAdherenteMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => adherenteUseCases.deleteImagen(id),
   {
      invalidateKeys: [adherenteKeys.lists()],
      errorLabel: "Error al eliminar la imagen del adherente",
   }
);