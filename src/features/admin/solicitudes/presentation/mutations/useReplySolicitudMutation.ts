import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { solicitudUseCases } from "../../application/container/solicitud.container";
import type { SolicitudRespuestaInput } from "../../application/contracts/solicitud.input";
import { solicitudKeys } from "../queries/solicitud.keys";

export const useReplySolicitudMutation = createApiMutation<ApiResponseVoid, SolicitudRespuestaInput>(
   (payload) => solicitudUseCases.reply(payload),
   {
      invalidateKeys: [solicitudKeys.lists()],
      errorLabel: "Error al responder la solicitud",
   }
);