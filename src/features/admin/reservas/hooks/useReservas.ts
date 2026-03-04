import { useDebounce } from '@hooks/useDebounce';
import { useSearchPaginate } from '@hooks/useSearchPaginate';
import apiQueryReserva from '../api/apiQueryReserva';
import type { IFilterReserva } from '../types/reserva';

export default function useReservas() {

    const { getReservasQuery } = apiQueryReserva();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<IFilterReserva>(getInitialFilters());

    //---------------------- INITIAL STATE --------------------------------

    function getInitialFilters(): IFilterReserva {
        return {
            Nombre: "",
            Apellidos: "",
            Espacio: "",
        }
    }

    //---------------------- CONSULTAR ------------------------------------

    const debouncedNombre = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedEspacio = useDebounce(filters.Espacio, 500);

    const debouncedFilters = {
        ...filters, Nombre: debouncedNombre, Apellidos: debouncedApellidos, Espacio: debouncedEspacio,
    };

    const { data, isLoading } = getReservasQuery(page, limit, debouncedFilters);
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