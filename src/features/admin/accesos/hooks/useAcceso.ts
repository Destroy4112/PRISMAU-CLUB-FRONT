import { useDebounce } from "@hooks/useDebounce";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import apiQueryAcceso from "../api/apiQueryAcceso";
import type { FiltersAcceso } from "../types/acceso";

function useAcceso() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersAcceso>(getInitialFilters());

    const { getAccesosQuery } = apiQueryAcceso();

    //=========== Initial ==================================

    function getInitialFilters(): FiltersAcceso {
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

    const { data, isLoading } = getAccesosQuery(page, limit, debouncedFilters);
    const accesos = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Control de Accesos",
        subtitulo: "Registro de entradas de usuarios al club",
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

export default useAcceso;
