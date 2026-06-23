import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { empleadoUseCases } from "../../application/container/empleado.container";
import { empleadoKeys } from "../queries/empleado.keys";

export const useDeleteEmpleadoMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => empleadoUseCases.delete(id),
    {
        invalidateKeys: [empleadoKeys.lists()],
        errorLabel: "Error al eliminar el empleado",
    }
);