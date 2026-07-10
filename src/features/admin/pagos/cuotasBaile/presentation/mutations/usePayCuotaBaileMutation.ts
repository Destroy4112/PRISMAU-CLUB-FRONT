import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { cuotaBaileUseCases } from "../../application/container/cuotaBaile.container";
import type { PayCuotaBaileInput } from "../../application/contracts/cuotaBaile.input";
import type { PagoCuotaBaileResponse } from "../../domain/models/cuotaBaile.response.model";
import { cuotaBaileKeys } from "../queries/cuotaBaile.keys";

export const usePayCuotaBaileMutation = createApiMutation<ApiResponse<PagoCuotaBaileResponse>, PayCuotaBaileInput>(
    (payload) => cuotaBaileUseCases.pay(payload),
    {
        invalidateKeys: [cuotaBaileKeys.list()],
        errorLabel: "Error al pagar la cuotaBaile",
    }
);