import { useAppMutation } from "@core/store/react-query/hooks";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { recuperarUseCases } from "../../application/recuperar.container";

export default function useRecuperarMutation() {
    return useAppMutation<ApiResponseVoid, Error, string>({
        mutationFn: (documento: string) => recuperarUseCases.getUser(documento),
    });
}
