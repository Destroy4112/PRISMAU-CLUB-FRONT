import { INITIAL_FILTERS_WITH_STATE, type FilterWithState } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useAdministracionSociosQuery } from "../queries/useAdministracionSociosQuery";

export default function useAdministracionSocio() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, setFilter, clearFilter,
    } = useSearchPaginate<FilterWithState>(INITIAL_FILTERS_WITH_STATE);

    const debounce = useDebounce<string>(filters.search, 500);

    const queryParams = { page, limit, search: debounce, state: filters.state };

    const { data, isLoading } = useAdministracionSociosQuery(queryParams);

    const socios = data?.data || [];
    const total = data?.total || 0;

    return {
        isLoading,
        socios,
        limit,
        page,
        total,
        filters,
        handleFilterChange,
        setFilter,
        clearFilter,
        onPageChange,
        onRowsPerPageChange
    };
}