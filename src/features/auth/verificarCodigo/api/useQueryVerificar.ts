import { useAppMutation } from "@hooks/useStore";
import type { ApiResponseVoid } from "@models/response/Response.model";
import type { IVerifyReset } from "../types/verificarCodigo";
import { validateCodeReset } from "./verificar.service";

export default function useQueryVerificar() {

    const { mutate: verificarMutation, isPending } = useAppMutation<ApiResponseVoid, Error, IVerifyReset>({
        mutationFn: validateCodeReset,
    });

    return {
        isPending,
        verificarMutation
    }
}
