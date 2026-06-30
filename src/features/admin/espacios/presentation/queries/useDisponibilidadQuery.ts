import { useAppQuery } from "@core/store/react-query/hooks";
import { disponibilidadUseCases } from "../../application/container/disponibilidad.container";
import type { Disponibilidad } from "../../domain/model/disponibilidad.model";
import { espacioKeys } from "./espacio.keys";

export function useDisponibilidadQuery(id?: number) {
    return useAppQuery<Disponibilidad[], Error>({
        queryKey: espacioKeys.disponibilidad(id),
        queryFn: () => {
            if (id === undefined) throw new Error("El id del espacio no está definido");
            return disponibilidadUseCases.get(id);
        },
        enabled: id !== undefined,
    });
}