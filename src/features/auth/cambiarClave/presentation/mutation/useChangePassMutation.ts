import { useAppMutation } from "@core/store/react-query/hooks";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { cambiarUseCases } from "../../application/container/cambiar.container";
import type { CambiarInput } from "../../application/contracts/cambiar.input";

export default function useChangePassMutation() {
   return useAppMutation<ApiResponseVoid, Error, CambiarInput>({
      mutationFn: (payload: CambiarInput) => cambiarUseCases.changePassword(payload),
   });
}
