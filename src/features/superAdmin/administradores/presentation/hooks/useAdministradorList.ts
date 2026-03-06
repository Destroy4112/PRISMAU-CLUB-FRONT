import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useMemo } from "react";
import type { AdministradorFilter } from "../../domain/administrador.filters";
import type { Administrador } from "../../domain/administrador.model";
import { useAdministradorQuery } from "../queries/useAdministradorQuery";
import { INITIAL_FILTERS_ADMIN } from "../types/admin";

export function useAdministradorList() {
    
    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros,
    } = useSearchPaginate<AdministradorFilter>(INITIAL_FILTERS_ADMIN);

    const debounceNombres = useDebounce(filters.Nombre, 500);
    const debounceApellidos = useDebounce(filters.Apellidos, 500);

    const debouncedFilters = useMemo(
        () => ({ ...filters, Nombre: debounceNombres, Apellidos: debounceApellidos }),
        [filters, debounceNombres, debounceApellidos]
    );

    const { data, isLoading } = useAdministradorQuery({ page, limit, filters: debouncedFilters });

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