import { useAppMutation, useAppQueryClient } from "@hooks/useStore";
import type { ApiResponse } from "@models/response/Response.model";
import { programacionUseCases } from "../../application/programacion.container";
import type { Programacion } from "../../domain/programacion.entity";
import { programacionKeys } from "../queries/programacion.keys";

export function useProgramarMutation() {

    const qc = useAppQueryClient();

    return useAppMutation<ApiResponse<Programacion>, Error, Programacion>({
        mutationFn: (payload) => programacionUseCases.create(payload),
        onSuccess: async (res) => {
            if (res.status) await qc.invalidateQueries({ queryKey: programacionKeys.all });
        },
    });

}