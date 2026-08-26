import { INITIAL_FILTERS_WITH_STATE, type FilterWithState } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import type { Solicitud } from "../../domain/models/solicitud.model";
import { useSolicitudQuery } from "../queries/useSolicitudQuery";

export function useSolicitudList() {

   const { filters, limit, page, onPageChange, setFilter, onRowsPerPageChange, handleFilterChange, clearFilter,
   } = useSearchPaginate<FilterWithState>(INITIAL_FILTERS_WITH_STATE);

   const debouncedFilters = useDebounce<string>(filters.search, 500);

   const queryParams = { page, limit, search: debouncedFilters, state: filters.state };

   const { data, isLoading } = useSolicitudQuery(queryParams);

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
      clearFilter,
      setFilter
   };
}