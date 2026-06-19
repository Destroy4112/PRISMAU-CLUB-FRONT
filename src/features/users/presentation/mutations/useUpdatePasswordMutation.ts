import { useAppMutation } from "@core/store/react-query/hooks";
import { userPasswordUseCases } from "@features/users/application/container/user.container";
import type { UserPasswordPayload } from "@features/users/domain/payloads/user-password.payload";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UseMutationOptions } from "@tanstack/react-query";

type Options = UseMutationOptions<ApiResponseVoid, Error, UserPasswordPayload>;

export default function useUpdatePasswordMutation(options?: Options) {
    return useAppMutation<ApiResponseVoid, Error, UserPasswordPayload>({
        mutationFn: (payload: UserPasswordPayload) => userPasswordUseCases.updatePassword(payload),
        ...options,
    });
}
