import { useAppMutation } from "@hooks/useStore";
import type { ApiResponseVoid } from "@models/response/Response.model";
import { sendResetCode } from "./recuperar.service";

export default function useQueryRecuperar() {

    const { mutate: recuperarMutation, isPending } = useAppMutation<ApiResponseVoid, Error, string>({
        mutationFn: sendResetCode,
    });

    return {
        isPending,
        recuperarMutation
    }
}
