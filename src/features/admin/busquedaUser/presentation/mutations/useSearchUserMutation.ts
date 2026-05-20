import { useAppMutation } from "@core/store/react-query/hooks";
import { busquedaUserUseCases } from "../../application/container/busqueda.container";
import type { BusquedaUserResponse } from "../../domain/model/busqueda-user.model";

export const useSearchUserMutation = () => {
    return useAppMutation<BusquedaUserResponse, Error, string>({
        mutationKey: ["searchUser"],
        mutationFn: (documento: string) => busquedaUserUseCases.get(documento),
    });
};