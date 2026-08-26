import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@core/store/react-query/createApiMutation";
import { adherenteUseCases } from "../../application/container/adherente.container";
import type { AdherenteEstadoInput } from "../../application/contracts/adherente.input";
import { adherenteKeys } from "../queries/adherente.keys";

export const useUpdateStatusAdherenteMutation = createApiMutation<ApiResponseVoid, AdherenteEstadoInput>(
   (payload) => adherenteUseCases.updateEstado(payload),
   {
      invalidateKeys: [adherenteKeys.lists()],
      errorLabel: "Error al actualizar el status del adherente",
   }
);