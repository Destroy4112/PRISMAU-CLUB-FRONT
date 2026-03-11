import { useAppMutation } from "@core/store/react-query/hooks";
import { busquedaUseCases } from "../../application/busqueda.container";
import type { ResultSearchResponse } from "../../domain/usuario-search.model";

export const useSearchUserMutation = () => {
    return useAppMutation<ResultSearchResponse, Error, string>({
        mutationKey: ["searchUser"],
        mutationFn: (documento: string) => busquedaUseCases.get(documento),
    });
};