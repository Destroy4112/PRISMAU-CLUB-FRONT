import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
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