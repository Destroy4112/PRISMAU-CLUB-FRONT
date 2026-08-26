import { INITIAL_FILTERS_WITH_STATE, type FilterWithState } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import type { Empleado } from "../../domain/model/empleado.model";
import { useEmpleadoQuery } from "../queries/useEmpleadoQuery";

export function useEmpleadoList() {

   const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, setFilter, clearFilter,
   } = useSearchPaginate<FilterWithState>(INITIAL_FILTERS_WITH_STATE);

   const debouncedSearch = useDebounce<string>(filters.search, 500);

   const queryParams = { page, limit, search: debouncedSearch, state: filters.state };

   const { data, isLoading } = useEmpleadoQuery(queryParams);

   const empleados: Empleado[] = data?.data || [];
   const total = data?.total || 0;

   return {
      empleados,
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