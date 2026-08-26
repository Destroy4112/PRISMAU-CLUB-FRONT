import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { empleadoUseCases } from "../../application/container/empleado.container";
import type { EmpleadoImagenInput } from "../../application/contracts/empleado.input";
import { empleadoKeys } from "../queries/empleado.keys";

export const useUpdateImagenEmpleadoMutation = createApiMutation<ApiResponseVoid, EmpleadoImagenInput>(
   (payload) => empleadoUseCases.updateImagen(payload),
   {
      invalidateKeys: [empleadoKeys.lists()],
   }
);