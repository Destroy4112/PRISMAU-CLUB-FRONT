import { INITIAL_FILTERS, type Filter } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import type { Rubro } from "../../domain/model/rubro.model";
import { useRubrosQuery } from "../queries/useRubrosQuery";

export function useRubroList() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, clearFilter,
    } = useSearchPaginate<Filter>(INITIAL_FILTERS);

    const debouncedSearch = useDebounce<string>(filters.search, 500);

    const queryParams = { page, limit, search: debouncedSearch };

    const { data, isLoading } = useRubrosQuery(queryParams);

    const rubros: Rubro[] = data?.data || [];
    const total = data?.total || 0;

    return {
        rubros,
        total,
        isLoading,
        page,
        limit,
        filters,
        onPageChange,
        onRowsPerPageChange,
        handleFilterChange,
        clearFilter,
    };
}