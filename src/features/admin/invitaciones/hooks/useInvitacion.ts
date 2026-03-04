import { useDebounce } from "@hooks/useDebounce";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import apiQueryInvitacion from "../api/apiQueryInvitacion";
import type { FiltersInvitacion } from "../types/invitacion";

function useInvitacion() {

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersInvitacion>(getInitialFilters());

    const { getInvitacionesQuery } = apiQueryInvitacion();

    //=========== Initial ==================================

    function getInitialFilters(): FiltersInvitacion {
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

    const { data, isLoading } = getInvitacionesQuery(page, limit, debouncedFilters);
    const invitaciones = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Invitaciones",
        subtitulo: "Listado de invitaciones realizadas por los socios",
        invitaciones,
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

export default useInvitacion;
