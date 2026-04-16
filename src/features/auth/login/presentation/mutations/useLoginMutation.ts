import { useAppMutation } from "@core/store/react-query/hooks";
import type { SessionResponse } from "@features/auth/domain/models/session.model";
import { loginUseCases } from "../../application/login.container";
import type { LoginPayload } from "../../domain/payload/login.payload";

export default function useLoginMutation() {

    return useAppMutation<SessionResponse, Error, LoginPayload>({
        mutationFn: (payload: LoginPayload) => loginUseCases.iniciarSesion(payload)
    });

}
