import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { asociadoUseCases } from "../../application/container/asociado.container";
import type { AsociadoImagenInput } from "../../application/contracts/asociado.input";
import { asociadoKeys } from "../queries/asociado.keys";

export const useUpdateImagenAsociadoMutation = createApiMutation<ApiResponseVoid, AsociadoImagenInput>(
   (payload) => asociadoUseCases.updateImagen(payload),
   {
      invalidateKeys: [asociadoKeys.lists()],
      errorLabel: "Error al actualizar la imagen del asociado",
   }
);