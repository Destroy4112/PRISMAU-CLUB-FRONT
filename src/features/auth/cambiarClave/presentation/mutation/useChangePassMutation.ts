import { useAppMutation } from "@core/store/react-query/hooks";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { cambiarUseCases } from "../../application/cambiar.container";
import type { CambiarPayload } from "../../domain/payload/cambiar.payload";

export default function useChangePassMutation() {
    return useAppMutation<ApiResponseVoid, Error, CambiarPayload>({
        mutationFn: (payload: CambiarPayload) => cambiarUseCases.changePassword(payload),
    });
}
