import { useDebounce } from '@shared/hooks/useDebounce';
import { useSearchPaginate } from '@shared/hooks/useSearchPaginate';
import { useMemo } from 'react';
import { useReservaQuery } from '../queries/useReservaQuery';
import { INITIAL_FILTERS_RESERVA, type FilterReserva } from '../types/reserva';

export default function useReservas() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FilterReserva>(INITIAL_FILTERS_RESERVA);

    const debouncedNombres = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedEspacio = useDebounce(filters.Espacio, 500);

    const debouncedFilters = useMemo(
        () => ({ ...filters, Nombres: debouncedNombres, Apellidos: debouncedApellidos, Espacio: debouncedEspacio }),
        [filters, debouncedNombres, debouncedApellidos, debouncedEspacio]
    );

    const { data, isLoading } = useReservaQuery({ page, limit, filters: debouncedFilters });
    const reservas = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Reservas",
        subtitulo: "Resumen de las reservas registradas por los usuarios",
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