import { useAppMutation } from "@core/store/react-query/hooks";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { verificarUseCases } from "../../application/container/verificar.container";
import type { VertificarInput } from "../../application/contracts/verificar.input";

export default function useVerificarMutation() {
   return useAppMutation<ApiResponseVoid, Error, VertificarInput>({
      mutationFn: (payload: VertificarInput) => verificarUseCases.verify(payload),
   });
}
