import { useDebounce } from "@hooks/useDebounce";
import useModals from "@hooks/useModal";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import { useAppNavigate } from "@hooks/useStore";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import type { IAsociado } from "@models/usuario/Usuario.model";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import apiQueryAsociado from "../api/apiQueryAsociado";
import type { AsociadoEstado, AsociadoImagen, FiltersAsociado } from "../types/asociado";

function useAsociado() {

    const navigate = useAppNavigate();
    const { modals, toggleModal } = useModals();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersAsociado>(getInitialFilters());

    const { isCreating, isUpdating, isUpdatingStatus, isUpdatingImagen, getAsociadosQuery, createAsociadoMutation,
        actualizarAsociadoMutation, cambiarEstadoMutation, eliminarAsociadoMutation, actualizarImagenMutation,
        eliminarImagenAsociadoMutation } = apiQueryAsociado();

    const [touched, setTouched] = useState<boolean>(false);
    const [asociado, setAsociado] = useState<IAsociado>(getInitialAsociado());
    const [asociadoEstado, setAsociadoEstado] = useState<AsociadoEstado>(getInitialAsociadoEstado());
    const [asociadoImagen, setAsociadoImagen] = useState<AsociadoImagen>(getInitialAsociadoImagen());

    /*=========== Recargar ==============================*/

    function getInitialAsociado(): IAsociado {
        return {
            imagen: "",
            Nombre: "",
            Apellidos: "",
            Correo: "",
            Telefono: "",
            FechaNacimiento: "",
            LugarNacimiento: "",
            TipoDocumento: "",
            Documento: "",
            Sexo: "",
            Codigo: "",
            DireccionResidencia: "",
            CiudadResidencia: "",
            TiempoResidencia: "",
            EstadoCivil: "",
            Profesion: "",
            Trabajo: "",
            Cargo: "",
            TiempoServicio: "",
            TelOficina: "",
            DireccionOficina: "",
            CiudadOficina: "",
            Estado: 1,
        }
    }

    function getInitialAsociadoEstado(): AsociadoEstado {
        return {
            id: 0,
            Estado: 0,
            Motivo: ""
        }
    }

    function getInitialAsociadoImagen(): AsociadoImagen {
        return {
            id: null,
            imagen: null
        }
    }

    function getInitialFilters(): FiltersAsociado {
        return {
            Nombre: "",
            Apellidos: "",
            Documento: "",
            Estado: 10,
        }
    }

    const recargar = (): void => {
        setTouched(false);
        setAsociado(getInitialAsociado());
        setAsociadoEstado(getInitialAsociadoEstado());
        setAsociadoImagen(getInitialAsociadoImagen());
    };

    const abrirModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    };

    /*=========== Agregar ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setAsociado((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (): void => {
        setTouched(true);
        createAsociadoMutation(asociado, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crear el asociado: ${error.message}`); },
        });
    };

    /*=========== Consultar ==============================*/

    const debouncedNombre = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedDocumento = useDebounce(filters.Documento, 500);

    const debouncedFilters = {
        ...filters, Nombre: debouncedNombre, Apellidos: debouncedApellidos, Documento: debouncedDocumento,
    };

    const { data, isLoading } = getAsociadosQuery(page, limit, debouncedFilters);
    const asociados = data?.data || [];
    const total = data?.total || 0;

    /*=========== Actualizar ==============================*/

    const cargar = (asociado: IAsociado): void => {
        setAsociado(asociado);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        setTouched(true);
        actualizarAsociadoMutation(asociado, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { console.log(error); alertError(`Error al actualizar el asociado: ${error.message}`); },
        });
    };

    /*=========== Go Family ===================================*/

    const goFamiliares = (asociado: IAsociado) => {
        navigate(PRIVATE_ROUTES.FAMILIARES_ASOCIADO,
            { state: { asociado } }
        );
    }

    /*=========== Cambiar estado ==============================*/

    const handleChangeEstado = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        setAsociadoEstado((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const changeState = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere cambiar el estado de este asociado?", "Si, cambiar!")) {
            toggleModal("estado");
            setAsociadoEstado((prev) => ({ ...prev, id }));
        }
    };

    const switchModalEstado = (): void => {
        toggleModal("estado");
        recargar();
    };

    const handleUpdateEstado = (): void => {
        cambiarEstadoMutation(asociadoEstado, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalEstado();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { console.log(error); alertError(`Error al cambiar el estado del asociado: ${error.message}`); },
        });
    };

    /*=========== Cambiar imagen ==============================*/

    const switchModalImagen = (): void => {
        toggleModal("imagen");
        recargar();
    };

    const cargarImagen = (id: number, imagen: string): void => {
        setAsociado((prev) => ({ ...prev, imagen }));
        setAsociadoImagen((prev) => ({ ...prev, id }));
        toggleModal("imagen");
    };

    const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setAsociadoImagen({ ...asociadoImagen, imagen: file });
    };

    const handleUpdateImagen = (): void => {
        const formData = new FormData();
        if (asociadoImagen.imagen) {
            formData.append('imagen', asociadoImagen.imagen as File);
        }
        actualizarImagenMutation({ id: asociadoImagen.id, imagen: formData }, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalImagen();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al cambiar la imagen del asociado: ${error.message}`); },
        });
    };

    /*=========== Eliminar ===================================*/

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este asociado?", "Si, eliminar!")) {
            eliminarAsociadoMutation(id, {
                onSuccess: (data) => alertSucces(data.message),
                onError: (error) => alertError(`Error al eliminar el asociado: ${error.message}`),
            });
        }
    };

    /*=========== ELiminar imagen ============================*/

    const handleDeleteImagen = async (): Promise<void> => {
        if (asociadoImagen.id) {
            if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este asociado?", "Si, eliminar!")) {
                eliminarImagenAsociadoMutation(asociadoImagen.id, {
                    onSuccess: (data) => {
                        if (data.status) {
                            alertSucces(data.message);
                            switchModalImagen();
                        }
                    },
                    onError: (error) => alertError(`Error al eliminar la imagen del asociado: ${error.message}`),
                });
            }
        }
    };

    return {
        titulo: "Asociados",
        subtitulo: "Gestión de miembros asociados del club",
        asociado,
        touched,
        tituloModal: asociado.id ? "Editar Asociado" : "Crear Asociado",
        tituloModalEstado: "Cambiar Estado",
        tituloModalImagen: "Cambiar Imagen",
        modals,
        total,
        page,
        limit,
        asociados,
        isLoading,
        loading: isCreating || isUpdating,
        filters,
        asociadoEstado,
        isUpdatingStatus,
        asociadoImagen,
        isUpdatingImagen,
        handleFilterChange,
        limpiarFiltros,
        toggleModal: abrirModal,
        handleChange,
        handler: asociado.id ? handleUpdate : handleSubmit,
        onPageChange,
        onRowsPerPageChange,
        handleDelete,
        cargar,
        changeState,
        goFamiliares,
        handleChangeEstado,
        switchModalEstado,
        handleUpdateEstado,
        switchModalImagen,
        cargarImagen,
        handleChangeImagen,
        handleUpdateImagen,
        handleDeleteImagen
    };
}

export default useAsociado;
