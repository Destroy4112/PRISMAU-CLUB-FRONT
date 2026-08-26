import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { asociadoUseCases } from "../../application/container/asociado.container";
import { asociadoKeys } from "../queries/asociado.keys";

export const useDeleteImagenAsociadoMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => asociadoUseCases.deleteImagen(id),
   {
      invalidateKeys: [asociadoKeys.lists()],
      errorLabel: "Error al eliminar la imagen del asociado",
   }
);