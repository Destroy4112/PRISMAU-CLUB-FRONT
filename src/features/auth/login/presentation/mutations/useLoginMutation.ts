import { useAppMutation } from "@core/store/react-query/hooks";
import { loginUseCases } from "../../application/login.container";
import type { Login, LoginPayload } from "../../domain/login.model";

export default function useLoginMutation() {

    return useAppMutation<Login, Error, LoginPayload>({
        mutationFn: (payload: LoginPayload) => loginUseCases.iniciarSesion(payload)
    });

}
