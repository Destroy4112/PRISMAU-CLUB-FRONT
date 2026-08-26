import { useAppMutation } from "@core/store/react-query/hooks";
import type { SessionResponse } from "@features/auth/shared/domain/models/session.model";
import { loginUseCases } from "../../application/container/login.container";
import type { LoginInput } from "../../application/contracts/login.input";

export default function useLoginMutation() {

   return useAppMutation<SessionResponse, Error, LoginInput>({
      mutationFn: (payload: LoginInput) => loginUseCases.iniciarSesion(payload)
   });

}
