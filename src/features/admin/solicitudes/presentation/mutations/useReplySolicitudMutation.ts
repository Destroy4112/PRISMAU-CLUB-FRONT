import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { solicitudUseCases } from "../../application/solicitud.container";
import type { SolicitudRespuestaPayload } from "../../domain/solicitud.model";
import { solicitudKeys } from "../queries/solicitud.keys";

export const useReplySolicitudMutation = createApiMutation<ApiResponseVoid, SolicitudRespuestaPayload>(
    (payload) => solicitudUseCases.reply(payload),
    {
        invalidateKeys: [solicitudKeys.all],
        errorLabel: "Error al crear el solicitud",
    }
);