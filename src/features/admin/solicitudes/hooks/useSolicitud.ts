import { useDebounce } from "@hooks/useDebounce";
import useModals from "@hooks/useModal";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import type { ISolicitud } from '@models/entities/Entity.model';
import { alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import apiQuerySolicitud from "../api/apiQuerySolicitud";
import type { IFilterSolicitud } from "../types/solicitud";

export default function useSolicitud() {

    const { modals, toggleModal } = useModals();
    const { isResponding, getSolicitudesQuery, responderMutation } = apiQuerySolicitud();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<IFilterSolicitud>(getInitialFilters());

    const [solicitud, setSolicitud] = useState<ISolicitud>(getInitialSolicitud());

    //--------------------- INITIAL STATE ---------------------------------

    function getInitialSolicitud(): ISolicitud {
        return {
            Descripcion: "",
            Tipo: "",
            user_id: 0,
            Respuesta: "",
            Estado: 0,
            created_at: "",
            updated_at: "",
        };
    }

    function getInitialFilters(): IFilterSolicitud {
        return {
            Nombre: "",
            Apellidos: "",
            Estado: 10,
        }
    }

    const recargar = (): void => {
        setSolicitud(getInitialSolicitud());
    };

    const abrirModal = (): void => {
        recargar();
        toggleModal("responder");
    };

    //--------------------- CONSULTAR ---------------------------------------

    const debouncedNombre = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);

    const debouncedFilters = { ...filters, Nombre: debouncedNombre, Apellidos: debouncedApellidos };

    const { data, isLoading } = getSolicitudesQuery(page, limit, debouncedFilters);
    const solicitudes = data?.data || [];
    const total = data?.total || 0;

    //--------------------- RESPONDER ---------------------------------------

    const cargarSolicitud = (solicitud: ISolicitud): void => {
        setSolicitud(solicitud);
        toggleModal("responder");
    };

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
        setSolicitud({ ...solicitud, [target.name]: target.value, });
    };

    const responder = () => {
        responderMutation(solicitud, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.map((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al responder la solicitud: ${error.message}`); },
        });
    };

    return {
        titulo: "Solicitudes",
        subtitulo: "Revisión de solicitudes de usuarios",
        tituloModal: "Responder solicitud",
        solicitudes,
        total,
        page,
        limit,
        filters,
        modals,
        solicitud,
        isLoading,
        isResponding,
        onPageChange,
        onRowsPerPageChange,
        handleFilterChange,
        limpiarFiltros,
        toggleModal: abrirModal,
        cargarSolicitud,
        handleChange,
        responder,
    };
}