import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@core/store/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import { adherenteKeys } from "../queries/adherente.keys";

export const useChangeAdherenteMutation = createApiMutation<ApiResponseVoid, number>(
   (payload) => adherenteUseCases.changeToAsociado(payload),
   {
      invalidateKeys: [adherenteKeys.lists()],
   }
);