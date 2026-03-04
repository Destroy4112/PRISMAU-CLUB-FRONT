import { useDebounce } from "@hooks/useDebounce";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import type { IContrato } from "@models/entities/Entity.model";
import apiQueryContrato from "../api/apiQueryContrato";
import type { FiltersContrato } from "../types/contrato";

function useContrato() {

    const { getContratosQuery } = apiQueryContrato();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersContrato>(getInitialFilters());

    //------------------ INITIAL STATE -----------------------------------

    function getInitialFilters(): FiltersContrato {
        return {
            Nombres: "",
            Apellidos: "",
            Identificacion: "",
        }
    }

    //------------------ CONSULTAR ---------------------------------------

    const debouncedNombres = useDebounce(filters.Nombres, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedIdentificacion = useDebounce(filters.Identificacion, 500);

    const debouncedFilters = {
        ...filters, Nombres: debouncedNombres, Apellidos: debouncedApellidos, Identificacion: debouncedIdentificacion,
    };

    const { data, isLoading } = getContratosQuery(page, limit, debouncedFilters);
    const contratos: IContrato[] = data?.data || [];
    const total = data?.total || 0;

    return {
        titulo: "Contratos",
        subtitulo: "Listado de usuarios interesados en adquirir nuestros servicios",
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

export default useContrato;
