import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { empleadoUseCases } from "../../application/container/empleado.container";
import type { UpdateEmpleadoInput } from "../../application/contracts/empleado.input";
import { empleadoKeys } from "../queries/empleado.keys";

export const useUpdateEmpleadoMutation = createApiMutation<ApiResponseVoid, UpdateEmpleadoInput>(
    (payload) => empleadoUseCases.update(payload),
    {
        invalidateKeys: [empleadoKeys.lists()],
        errorLabel: "Error al actualizar el empleado",
    }
);