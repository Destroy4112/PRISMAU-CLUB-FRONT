import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { disponibilidadUseCases } from "../../application/container/disponibilidad.container";
import type { SaveDisponibilidadInput } from "../../application/contracts/disponibilidad.input";
import { espacioKeys } from "../queries/espacio.keys";

export const useSaveDisponibilidadMutation = createApiMutation<ApiResponseVoid, SaveDisponibilidadInput>(
   (payload) => disponibilidadUseCases.save(payload),
   {
      invalidateKeys: [espacioKeys.lists()],
      errorLabel: "Error al crear la disponibilidad",
   }
);