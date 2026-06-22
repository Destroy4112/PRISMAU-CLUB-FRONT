import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import type { UpdateAdherenteInput } from "../../application/contracts/adherente.input";
import { adherenteKeys } from "../queries/adherente.keys";

export const useUpdateAdherenteMutation = createApiMutation<ApiResponseVoid, UpdateAdherenteInput>(
    (payload) => adherenteUseCases.update(payload),
    {
        invalidateKeys: [adherenteKeys.lists()],
        errorLabel: "Error al actualizar el adherente",
    }
);