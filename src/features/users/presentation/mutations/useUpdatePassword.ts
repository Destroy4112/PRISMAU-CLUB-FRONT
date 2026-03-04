import { useAppMutation } from "@core/store/react-query/hooks";
import { userUseCases } from "@features/users/application/user.container";
import type { UserPasswordPayload } from "@features/users/domain/user-password.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UseMutationOptions } from "@tanstack/react-query";

type Options = UseMutationOptions<ApiResponseVoid, Error, UserPasswordPayload>;

export default function useUpdatePassword(options?: Options) {
    return useAppMutation<ApiResponseVoid, Error, UserPasswordPayload>({
        mutationFn: userUseCases.updatePassword,
        ...options,
    });
}
