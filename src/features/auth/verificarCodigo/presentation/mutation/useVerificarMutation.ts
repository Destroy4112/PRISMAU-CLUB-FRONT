import { useAppMutation } from "@core/store/react-query/hooks";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { verificarUseCases } from "../../application/verificar.container";
import type { VerificarPayload } from "../../domain/payload/verificar.payload";

export default function useVerificarMutation() {
    return useAppMutation<ApiResponseVoid, Error, VerificarPayload>({
        mutationFn: (payload: VerificarPayload) => verificarUseCases.verify(payload),
    });
}
