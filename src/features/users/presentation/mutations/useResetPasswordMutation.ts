import { useAppMutation } from "@core/store/react-query/hooks";
import { userPasswordUseCases } from "@features/users/application/container/user.container";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UseMutationOptions } from "@tanstack/react-query";

type Options = UseMutationOptions<ApiResponseVoid, Error, number>;

export default function useResetPasswordMutation(options?: Options) {
   return useAppMutation<ApiResponseVoid, Error, number>({
      ...options,
      mutationFn: (id) => userPasswordUseCases.resetPassword(id),
   });
}