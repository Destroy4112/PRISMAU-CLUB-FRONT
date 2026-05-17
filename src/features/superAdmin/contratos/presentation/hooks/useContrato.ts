import { INITIAL_FILTERS, type Filter } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useContratoQuery } from "../queries/useContratoQuery";

function useContrato() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<Filter>(INITIAL_FILTERS);

    const debounce = useDebounce<string>(filters.search, 500);

    const queryParams = { page, limit, search: debounce };

    const { data, isLoading } = useContratoQuery(queryParams);

    const contratos = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Contratos",
        subtitulo: "Listado de usuarios interesados en adquirir nuestros servicios",
        campos: "nombre completo, identificación, empresa, ciudad",
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
