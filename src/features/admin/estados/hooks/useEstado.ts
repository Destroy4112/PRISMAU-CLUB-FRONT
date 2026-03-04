import { useDebounce } from "@hooks/useDebounce";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import apiQueryEstado from "../api/apiQueryEstado";
import type { FiltersEstado } from "../types/estado";

function useEstado() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersEstado>(getInitialFilters());

    const { getEstadosQuery } = apiQueryEstado();

    //=========== Initial ==================================

    function getInitialFilters(): FiltersEstado {
        return {
            Nombre: "",
            Apellidos: "",
            Documento: "",
        }
    }

    /*=========== Consultar ==============================*/

    const debouncedNombre = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedDocumento = useDebounce(filters.Documento, 500);

    const debouncedFilters = {
        ...filters, Nombre: debouncedNombre, Apellidos: debouncedApellidos, Documento: debouncedDocumento,
    };

    const { data, isLoading } = getEstadosQuery(page, limit, debouncedFilters);
    const accesos = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Control de Estados",
        subtitulo: "Historial de cambios en el estado de los socios",
        accesos,
        total,
        isLoading,
        page,
        limit,
        filters,
        onPageChange,
        onRowsPerPageChange,
        handleFilterChange,
        limpiarFiltros
    };
}

export default useEstado;
