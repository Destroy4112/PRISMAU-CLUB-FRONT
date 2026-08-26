import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { empleadoUseCases } from "../../application/container/empleado.container";
import { empleadoKeys } from "../queries/empleado.keys";

export const useDeleteImagenEmpleadoMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => empleadoUseCases.deleteImagen(id),
   {
      invalidateKeys: [empleadoKeys.lists()],
      errorLabel: "Error al eliminar la imagen del empleado",
   }
);