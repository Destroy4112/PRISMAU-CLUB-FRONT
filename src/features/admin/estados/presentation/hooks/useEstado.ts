import { INITIAL_FILTERS_WITH_STATE, type FilterWithState } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useEstadoQuery } from "../queries/useEstadoQuery";

function useEstado() {

   const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, setFilter, clearFilter,
   } = useSearchPaginate<FilterWithState>(INITIAL_FILTERS_WITH_STATE);

   const debounce = useDebounce<string>(filters.search, 500);

   const queryParams = { page, limit, search: debounce, state: filters.state };

   const { data, isLoading } = useEstadoQuery(queryParams);

   const contratos = data?.data || [];
   const total = data?.total || 0;

   return {
      titulo: "Estados",
      subtitulo: "Historial de cambios en el estado de los socios",
      campos: "nombre completo, identificación...",
      isLoading,
      contratos,
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

export default useEstado;
