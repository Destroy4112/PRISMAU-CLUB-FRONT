import { INITIAL_FILTERS_WITH_STATE, type FilterWithState } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useCuotaBaileQuery } from "../queries/useCuotaBaileQuery";

export default function useCuotaBaileList(documento: string) {

   const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, setFilter, clearFilter,
   } = useSearchPaginate<FilterWithState>(INITIAL_FILTERS_WITH_STATE);

   const debounce = useDebounce<string>(filters.search, 500);

   const queryParams = { page, limit, search: debounce, state: filters.state };

   const { data, isLoading } = useCuotaBaileQuery(documento, queryParams);

   const cuotas = data?.data || [];
   const total = data?.stats?.total || 0;
   const pagadas = data?.stats?.pagadas || 0;
   const pendientes = data?.stats?.pendientes || 0;

   return {
      isLoading,
      cuotas,
      limit,
      page,
      total,
      filters,
      pagadas,
      pendientes,
      handleFilterChange,
      setFilter,
      clearFilter,
      onPageChange,
      onRowsPerPageChange
   };
}