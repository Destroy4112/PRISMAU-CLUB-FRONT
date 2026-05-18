import { useOptionQuery } from "../queries/useOptionQuery";

export function useOptionList(id: number) {

    const { data: options, isLoading } = useOptionQuery(id);

    return {
        options,
        isLoading,
    };
}