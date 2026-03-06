import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useMemo } from "react";
import { useContratoQuery } from "../queries/useContratoQuery";
import { INITIAL_FILTERS_CONTRATO, type FiltersContrato } from "../types/contrato";

function useContrato() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersContrato>(INITIAL_FILTERS_CONTRATO);

    const debouncedNombres = useDebounce(filters.Nombres, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedIdentificacion = useDebounce(filters.Identificacion, 500);

    const debouncedFilters = useMemo(
        () => ({ ...filters, Nombres: debouncedNombres, Apellidos: debouncedApellidos, Identificacion: debouncedIdentificacion }),
        [filters, debouncedNombres, debouncedApellidos, debouncedIdentificacion]
    );

    const { data, isLoading } = useContratoQuery({ page, limit, filters: debouncedFilters });

    const contratos = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Contratos",
        subtitulo: "Listado de usuarios interesados en adquirir nuestros servicios",
        isLoading,
        contratos,
        limit,
        page,
        total,
        filters,
        handleFilterChange,
        limpiarFiltros,
        onPageChange,
        onRowsPerPageChange
    };
}

export default useContrato;
