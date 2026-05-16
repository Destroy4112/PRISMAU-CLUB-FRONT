import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import type { AdministradorFilter } from "../../application/contracts/administrador.filters";
import type { Administrador } from "../../domain/models/administrador.model";
import { useAdministradorQuery } from "../queries/useAdministradorQuery";
import { INITIAL_FILTERS_ADMIN } from "../types/admin";

export function useAdministradorList() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros,
    } = useSearchPaginate<AdministradorFilter>(INITIAL_FILTERS_ADMIN);

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