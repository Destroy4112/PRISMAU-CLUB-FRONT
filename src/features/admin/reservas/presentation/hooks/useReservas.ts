import { INITIAL_FILTERS, type Filter } from '@shared/constants/filters/filters.constant';
import { useDebounce } from '@shared/hooks/useDebounce';
import { useSearchPaginate } from '@shared/hooks/useSearchPaginate';
import { useReservaQuery } from '../queries/useReservaQuery';

export default function useReservas() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<Filter>(INITIAL_FILTERS);

    const debouncedSearch = useDebounce(filters.search, 500);

    const queryParams = { page, limit, search: debouncedSearch };

    const { data, isLoading } = useReservaQuery(queryParams);
    const reservas = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Reservas",
        subtitulo: "Resumen de las reservas registradas por los usuarios",
        campos: "nombre del socio, espacio",
        isLoading,
        reservas,
        total,
        page,
        limit,
        filters,
        onPageChange,
        onRowsPerPageChange,
        handleFilterChange,
        limpiarFiltros,
    }
}