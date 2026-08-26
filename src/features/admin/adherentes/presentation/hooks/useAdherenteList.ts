import { INITIAL_FILTERS_WITH_STATE, type FilterWithState } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import type { Adherente } from "../../domain/model/adherente.model";
import { useAdherenteQuery } from "../queries/useAdherenteQuery";

export function useAdherenteList() {

   const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, setFilter, clearFilter,
   } = useSearchPaginate<FilterWithState>(INITIAL_FILTERS_WITH_STATE);

   const debouncedSearch = useDebounce<string>(filters.search, 500);

   const queryParams = { page, limit, search: debouncedSearch, state: filters.state };

   const { data, isLoading } = useAdherenteQuery(queryParams);

   const adherentes: Adherente[] = data?.data || [];
   const total = data?.total || 0;

   return {
      adherentes,
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