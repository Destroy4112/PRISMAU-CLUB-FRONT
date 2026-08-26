import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@core/store/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import type { AdherenteImagenInput } from "../../application/contracts/adherente.input";
import { adherenteKeys } from "../queries/adherente.keys";

export const useUpdateImagenAdherenteMutation = createApiMutation<ApiResponseVoid, AdherenteImagenInput>(
   (payload) => adherenteUseCases.updateImagen(payload),
   {
      invalidateKeys: [adherenteKeys.lists()],
   }
);