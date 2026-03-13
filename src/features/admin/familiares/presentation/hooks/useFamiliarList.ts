import type { Familiar } from "../../domain/familiar.model";
import { useFamiliarQuery } from "../queries/useFamiliarQuery";

export function useFamiliarList(id: number, rol: string) {

    const { data, isLoading } = useFamiliarQuery(id, rol);

    const familiares: Familiar[] = data || [];

    return {
        familiares,
        isLoading,
    };
}