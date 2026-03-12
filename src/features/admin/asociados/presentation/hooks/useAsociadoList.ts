import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useMemo } from "react";
import type { AsociadoFilter } from "../../domain/asociado.filters";
import type { Asociado } from "../../domain/asociado.model";
import { useAsociadoQuery } from "../queries/useAsociadoQuery";
import { INITIAL_FILTERS_ASOCIADO } from "../types/asociado";

export function useAsociadoList() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros,
    } = useSearchPaginate<AsociadoFilter>(INITIAL_FILTERS_ASOCIADO);

    const debounceNombres = useDebounce(filters.Nombre, 500);
    const debounceApellidos = useDebounce(filters.Apellidos, 500);
    const debounceDocumento = useDebounce(filters.Documento, 500);

    const debouncedFilters = useMemo(
        () => ({ ...filters, Nombre: debounceNombres, Apellidos: debounceApellidos, Documento: debounceDocumento }),
        [filters, debounceNombres, debounceApellidos, debounceDocumento]
    );

    const { data, isLoading } = useAsociadoQuery({ page, limit, filters: debouncedFilters });

    const asociados: Asociado[] = data?.data || [];
    const total = data?.total || 0;

    return {
        asociados,
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