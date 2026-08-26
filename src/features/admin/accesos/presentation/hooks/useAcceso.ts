import { INITIAL_FILTERS, type Filter } from "@shared/constants/filters/filters.constant";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { useAccesoQuery } from "../queries/useAccesoQuery";

function useAcceso() {

   const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
   } = useSearchPaginate<Filter>(INITIAL_FILTERS);

   const debounce = useDebounce<string>(filters.search, 500);

   const queryParams = { page, limit, search: debounce };

   const { data, isLoading } = useAccesoQuery(queryParams);

   const contratos = data?.data || [];
   const total = data?.total || 0;

   return {
      titulo: "Accesos",
      subtitulo: "Registro de entradas de usuarios al club",
      campos: "nombre completo, identificación...",
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

export default useAcceso;
