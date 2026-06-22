import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import type { CreateAdherenteInput } from "../../application/contracts/adherente.input";
import { adherenteKeys } from "../queries/adherente.keys";

export const useCreateAdherenteMutation = createApiMutation<ApiResponseVoid, CreateAdherenteInput>(
    (payload) => adherenteUseCases.create(payload),
    {
        invalidateKeys: [adherenteKeys.lists()],
        errorLabel: "Error al crear el adherente",
    }
);