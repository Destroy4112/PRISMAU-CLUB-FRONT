import { useDebounce } from "@hooks/useDebounce";
import useModals from "@hooks/useModal";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import { useAppNavigate } from "@hooks/useStore";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import type { IAdherente } from "@models/usuario/Usuario.model";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import apiQueryAdherente from "../api/apiQueryAdherente";
import type { AdherenteEstado, AdherenteImagen, FiltersAdherente } from "../types/adherente";

function useAdherente() {

    const navigate = useAppNavigate();
    const { modals, toggleModal } = useModals();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersAdherente>(getInitialFilters());

    const { isCreating, isUpdating, isUpdatingStatus, isUpdatingImagen, getAdherentesQuery,
        createAdherenteMutation, changeToAsociadoMutation, actualizarAdherenteMutation, cambiarEstadoMutation,
        eliminarAdherenteMutation, actualizarImagenMutation, eliminarImagenAdherenteMutation } = apiQueryAdherente();

    const [touched, setTouched] = useState<boolean>(false);
    const [adherente, setAdherente] = useState<IAdherente>(getInitialAdherente());
    const [adherenteEstado, setAdherenteEstado] = useState<AdherenteEstado>(getInitialAdherenteEstado());
    const [adherenteImagen, setAdherenteImagen] = useState<AdherenteImagen>(getInitialAdherenteImagen());

    /*=========== Recargar ==============================*/

    function getInitialAdherente(): IAdherente {
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

    function getInitialAdherenteEstado(): AdherenteEstado {
        return {
            id: 0,
            Estado: 0,
            Motivo: ""
        }
    }

    function getInitialAdherenteImagen(): AdherenteImagen {
        return {
            id: null,
            imagen: null
        }
    }

    function getInitialFilters(): FiltersAdherente {
        return {
            Nombre: "",
            Apellidos: "",
            Documento: "",
            Estado: 10,
        }
    }

    const recargar = (): void => {
        setTouched(false);
        setAdherente(getInitialAdherente());
        setAdherenteEstado(getInitialAdherenteEstado());
        setAdherenteImagen(getInitialAdherenteImagen());
    };

    const abrirModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    };

    /*=========== Agregar ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setAdherente((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (): void => {
        setTouched(true);
        createAdherenteMutation(adherente, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crear el adherente: ${error.message}`); },
        });
    };

    /*=========== Consultar ==============================*/

    const debouncedNombre = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedDocumento = useDebounce(filters.Documento, 500);

    const debouncedFilters = {
        ...filters, Nombre: debouncedNombre, Apellidos: debouncedApellidos, Documento: debouncedDocumento,
    };

    const { data, isLoading } = getAdherentesQuery(page, limit, debouncedFilters);
    const solicitudes = data?.data || [];
    const total = data?.total || 0;

    /*=========== Actualizar ==============================*/

    const cargar = (adherente: IAdherente): void => {
        setAdherente(adherente);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        setTouched(true);
        actualizarAdherenteMutation(adherente, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al actualizar el adherente: ${error.message}`); },
        });
    };

    /*=========== Cambiar a asociado ==========================*/

    const handleUpdateToAsociado = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere cambiar este adherente a asociado?", "Si, cambiar!")) {
            changeToAsociadoMutation(id, {
                onSuccess: (data) => {
                    if (data.status) {
                        alertSucces(data.message);
                    } else {
                        data.errors.forEach((err) => alertWarning(err));
                    }
                },
                onError: (error) => { alertError(`Error al actualizar el adherente: ${error.message}`); },
            });
        }
    }

    /*=========== Go Family ===================================*/

    const goFamiliares = (adherente: IAdherente) => {
        navigate(PRIVATE_ROUTES.FAMILIARES_ADHERENTE,
            { state: { adherente } }
        );
    }

    /*=========== Cambiar estado ==============================*/

    const handleChangeEstado = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        setAdherenteEstado((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const changeState = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere cambiar el estado de este adherente?", "Si, cambiar!")) {
            toggleModal("estado");
            setAdherenteEstado((prev) => ({ ...prev, id }));
        }
    };

    const switchModalEstado = (): void => {
        toggleModal("estado");
        recargar();
    };

    const handleUpdateEstado = (): void => {
        cambiarEstadoMutation(adherenteEstado, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalEstado();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al cambiar el estado del adherente: ${error.message}`); },
        });
    };

    /*=========== Cambiar imagen ==============================*/

    const switchModalImagen = (): void => {
        toggleModal("imagen");
        recargar();
    };

    const cargarImagen = (id: number, imagen: string): void => {
        setAdherente((prev) => ({ ...prev, imagen }));
        setAdherenteImagen((prev) => ({ ...prev, id }));
        toggleModal("imagen");
    };

    const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setAdherenteImagen({ ...adherenteImagen, imagen: file });
    };

    const handleUpdateImagen = (): void => {
        const formData = new FormData();
        if (adherenteImagen.imagen) {
            formData.append('imagen', adherenteImagen.imagen as File);
        }
        actualizarImagenMutation({ id: adherenteImagen.id, imagen: formData }, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalImagen();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al cambiar la imagen del adherente: ${error.message}`); },
        });
    };

    /*=========== Eliminar ===================================*/

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este adherente?", "Si, eliminar!")) {
            eliminarAdherenteMutation(id, {
                onSuccess: (data) => alertSucces(data.message),
                onError: (error) => alertError(`Error al eliminar el adherente: ${error.message}`),
            });
        }
    };

    /*=========== ELiminar imagen ============================*/

    const handleDeleteImagen = async (): Promise<void> => {
        if (adherenteImagen.id) {
            if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este adherente?", "Si, eliminar!")) {
                eliminarImagenAdherenteMutation(adherenteImagen.id, {
                    onSuccess: (data) => {
                        if (data.status) {
                            alertSucces(data.message);
                            switchModalImagen();
                        }
                    },
                    onError: (error) => alertError(`Error al eliminar la imagen del adherente: ${error.message}`),
                });
            }
        }
    };

    return {
        titulo: "Adherentes",
        subtitulo: "Gestión de miembros adherentes del club",
        adherente,
        touched,
        tituloModal: adherente.id ? "Editar Adherente" : "Crear Adherente",
        tituloModalEstado: "Cambiar Estado",
        tituloModalImagen: "Cambiar Imagen",
        modals,
        total,
        page,
        limit,
        solicitudes,
        isLoading,
        loading: isCreating || isUpdating,
        filters,
        adherenteEstado,
        isUpdatingStatus,
        adherenteImagen,
        isUpdatingImagen,
        handleFilterChange,
        limpiarFiltros,
        toggleModal: abrirModal,
        handleChange,
        handler: adherente.id ? handleUpdate : handleSubmit,
        onPageChange,
        onRowsPerPageChange,
        handleDelete,
        cargar,
        changeState,
        goFamiliares,
        handleUpdateToAsociado,
        handleChangeEstado,
        switchModalEstado,
        handleUpdateEstado,
        switchModalImagen,
        cargarImagen,
        handleChangeImagen,
        handleUpdateImagen,
        handleDeleteImagen
    };

};

export default useAdherente;
