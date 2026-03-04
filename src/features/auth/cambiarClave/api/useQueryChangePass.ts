import { useAppMutation } from "@hooks/useStore";
import type { ApiResponseVoid } from "@models/response/Response.model";
import type { IPasswordReset } from "../types/cambiarClave";
import { changePassword } from "./changePass.service";

export default function useQueryRecuperar() {

    const { mutate: changePasswordMutation, isPending } = useAppMutation<ApiResponseVoid, Error, IPasswordReset>({
        mutationFn: changePassword,
    });

    return {
        isPending,
        changePasswordMutation
    }
}
