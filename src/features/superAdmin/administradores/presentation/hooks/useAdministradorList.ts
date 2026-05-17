import { INITIAL_FILTERS, type Filter } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import type { Administrador } from "../../domain/models/administrador.model";
import { useAdministradorQuery } from "../queries/useAdministradorQuery";

export function useAdministradorList() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros,
    } = useSearchPaginate<Filter>(INITIAL_FILTERS);

    const debouncedSearch = useDebounce<string>(filters.search, 500);

    const queryParams = { page, limit, search: debouncedSearch };

    const { data, isLoading } = useAdministradorQuery(queryParams);

    const admins: Administrador[] = data?.data || [];
    const total = data?.total || 0;

    return {
        admins,
        total,
        isLoading,
        page,
        limit,
        filters,
        onPageChange,
        onRowsPerPageChange,
        handleFilterChange,
        limpiarFiltros,
    };
}