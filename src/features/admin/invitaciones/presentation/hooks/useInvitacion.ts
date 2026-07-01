import { INITIAL_FILTERS, type Filter } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useInvitacionQuery } from "../queries/useInvitacionQuery";

function useInvitacion() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<Filter>(INITIAL_FILTERS);

    const debounce = useDebounce<string>(filters.search, 500);

    const queryParams = { page, limit, search: debounce };

    const { data, isLoading } = useInvitacionQuery(queryParams);

    const contratos = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Invitaciones",
        subtitulo: "Listado de invitaciones realizadas por los socios",
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

export default useInvitacion;
