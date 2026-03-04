import { useAppMutation, useAppQueryClient } from "@core/store/react-query/hooks";
import { alertError, alertSucces, alertWarning } from "@shared/utilities/alerts/alertas.utility";
import type { QueryKey } from "@tanstack/react-query";

type BaseApiResponse =
    | { status: true; message: string; errors?: string[] }
    | { status: false; message?: string; errors?: string[] };

type UseApiMutationRuntimeOptions<TRes extends BaseApiResponse> = {
    onOk?: (res: TRes) => void;
    successMessage?: (res: TRes) => string | null;
    errorMessage?: (error: Error) => string;
};

type InvalidateKey = QueryKey | (() => QueryKey);

type UseApiMutationBaseOptions = {
    invalidateKeys?: readonly InvalidateKey[];
    errorLabel?: string;
};

export function createApiMutation<TRes extends BaseApiResponse, TVars>(
    mutationFn: (vars: TVars) => Promise<TRes>,
    base?: UseApiMutationBaseOptions
) {
    return function useApiMutation(runtime?: UseApiMutationRuntimeOptions<TRes>) {
        const qc = useAppQueryClient();

        return useAppMutation<TRes, Error, TVars>({
            mutationFn,

            onSuccess: async (res) => {
                if (res.status) {
                    const msg = runtime?.successMessage ? runtime.successMessage(res) : res.message;
                    if (msg) alertSucces(msg);

                    for (const k of base?.invalidateKeys ?? []) {
                        const key = typeof k === "function" ? k() : k;
                        await qc.invalidateQueries({ queryKey: key });
                    }

                    runtime?.onOk?.(res);
                } else {
                    (res.errors ?? [res.message ?? "Ocurrió un error"]).forEach(alertWarning);
                }
            },

            onError: (error) => {
                const msg = runtime?.errorMessage?.(error) ?? `${base?.errorLabel ?? "Ocurrió un error"}: ${error.message}`;
                alertError(msg);
            },
        });
    };
}