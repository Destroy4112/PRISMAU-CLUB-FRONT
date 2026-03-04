import { useDebounce } from "@hooks/useDebounce";
import useModals from "@hooks/useModal";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import type { IEspacio } from "@models/entities/Entity.model";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import apiQueryEspacio from "../api/apiQueryEspacio";
import type { EspacioImagen, FilterEspacio } from "../types/espacio";

export default function useEspacio() {

    const { modals, toggleModal } = useModals();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FilterEspacio>(getInitialFilters());

    const { isCreating, isUpdating, isUpdatingImagen, getEspaciosQuery, createEspacioMutation,
        actualizarEspacioMutation, eliminarEspacioMutation, actualizarImagenMutation } = apiQueryEspacio();

    const [touched, setTouched] = useState<boolean>(false);
    const [espacio, setEspacio] = useState<IEspacio>(getInitialEspacio());
    const [espacioImagen, setEspacioImagen] = useState<EspacioImagen>(getInitialEspacioImagen());

    /*=========== Recargar ==============================*/

    function getInitialEspacio(): IEspacio {
        return {
            Descripcion: "",
            imagen: "",
            Estado: 1,
        }
    }

    function getInitialEspacioImagen(): EspacioImagen {
        return {
            id: null,
            imagen: null
        }
    }

    function getInitialFilters(): FilterEspacio {
        return {
            Descripcion: "",
        }
    }

    const recargar = (): void => {
        setEspacio(getInitialEspacio());
        setEspacioImagen(getInitialEspacioImagen());
        setTouched(false);
    };

    const abrirModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    };

    /*=========== Agregar ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setEspacio({ ...espacio, [name]: value });
    };

    const handleSubmit = (): void => {
        setTouched(true);
        createEspacioMutation(espacio, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crear el espacio: ${error.message}`); },
        });
    };

    /*=========== Consultar ==============================*/

    const debouncedDescripcion = useDebounce(filters.Descripcion, 500);

    const debouncedFilters = { ...filters, Descripcion: debouncedDescripcion };

    const { data, isLoading } = getEspaciosQuery(page, limit, debouncedFilters);
    const espacios = data?.data || [];
    const total = data?.total || 0;

    const handleChangeBusqueda = (busqueda: string): void => {
        handleFilterChange({ target: { name: "Descripcion", value: busqueda } } as ChangeEvent<HTMLInputElement>);
    }

    /*=========== Actualizar ==============================*/

    const cargar = (espacio: IEspacio): void => {
        setEspacio(espacio);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        setTouched(true);
        actualizarEspacioMutation(espacio, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al actualizar el espacio: ${error.message}`); },
        });
    };

    /*=========== Cambiar imagen ==============================*/

    const switchModalImagen = (): void => {
        toggleModal("imagen");
        recargar();
    };

    const cargarImagen = (id: number, imagen: string): void => {
        setEspacio((prev) => ({ ...prev, imagen }));
        setEspacioImagen((prev) => ({ ...prev, id }));
        toggleModal("imagen");
    };

    const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setEspacioImagen({ ...espacioImagen, imagen: file });
    };

    const handleUpdateImagen = (): void => {
        const formData = new FormData();
        if (espacioImagen.imagen) {
            formData.append('imagen', espacioImagen.imagen as File);
        }
        actualizarImagenMutation({ id: espacioImagen.id, imagen: formData }, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalImagen();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al cambiar la imagen del espacio: ${error.message}`); },
        });
    };

    /*=========== Eliminar ===================================*/

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este espacio?", "Si, eliminar!")) {
            eliminarEspacioMutation(id, {
                onSuccess: (data) => alertSucces(data.message),
                onError: (error) => alertError(`Error al eliminar el espacio: ${error.message}`),
            });
        }
    };

    return {
        titulo: "Espacios",
        subtitulo: "Gestión de espacios del club",
        espacio,
        tituloModal: espacio.id ? "Editar Espacio" : "Crear Espacio",
        tituloModalImagen: "Cambiar Imagen",
        touched,
        modals,
        total,
        page,
        limit,
        espacios,
        isLoading,
        loading: isCreating || isUpdating,
        filters,
        espacioImagen,
        isUpdatingImagen,
        handleFilterChange,
        limpiarFiltros,
        toggleModal: abrirModal,
        handleChange,
        handler: espacio.id ? handleUpdate : handleSubmit,
        onPageChange,
        onRowsPerPageChange,
        handleDelete,
        cargar,
        switchModalImagen,
        cargarImagen,
        handleChangeImagen,
        handleUpdateImagen,
        handleChangeBusqueda
    };
}