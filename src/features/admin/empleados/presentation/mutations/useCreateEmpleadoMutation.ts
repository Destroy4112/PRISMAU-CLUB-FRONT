import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { empleadoUseCases } from "../../application/container/empleado.container";
import type { CreateEmpleadoInput } from "../../application/contracts/empleado.input";
import { empleadoKeys } from "../queries/empleado.keys";

export const useCreateEmpleadoMutation = createApiMutation<ApiResponseVoid, CreateEmpleadoInput>(
    (payload) => empleadoUseCases.create(payload),
    {
        invalidateKeys: [empleadoKeys.lists()],
        errorLabel: "Error al crear el empleado",
    }
);