import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useMemo } from "react";
import type { SolicitudFilter } from "../../domain/solicitud.filters";
import type { Solicitud } from "../../domain/solicitud.model";
import { useSolicitudQuery } from "../queries/useSolicitudQuery";
import { INITIAL_FILTERS_SOLICITUD } from "../types/solicitud";

export function useSolicitudList() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros,
    } = useSearchPaginate<SolicitudFilter>(INITIAL_FILTERS_SOLICITUD);

    const debounceNombres = useDebounce(filters.Nombre, 500);
    const debounceApellidos = useDebounce(filters.Apellidos, 500);

    const debouncedFilters = useMemo(
        () => ({ ...filters, Nombre: debounceNombres, Apellidos: debounceApellidos }),
        [filters, debounceNombres, debounceApellidos]
    );

    const { data, isLoading } = useSolicitudQuery({ page, limit, filters: debouncedFilters });

    const solicitudes: Solicitud[] = data?.data || [];
    const total = data?.total || 0;

    return {
        solicitudes,
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