import { useDebounce } from "@hooks/useDebounce";
import useModals from "@hooks/useModal";
import { useSearchPaginate } from "@hooks/useSearchPaginate";
import type { IEmpleado } from '@models/usuario/Usuario.model';
import { alertConfirm, alertError, alertSucces, alertWarning } from "@utils/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import apiQueryEmpleado from "../api/apiQueryEmpleado";
import type { EmpleadoImagen, FiltersEmpleado } from "../types/empleado";

function useEmpleado() {

    const { modals, toggleModal } = useModals();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<FiltersEmpleado>(getInitialFilters());

    const { isCreating, isUpdating, isUpdatingImagen, getEmpleadosQuery, createEmpleadoMutation,
        actualizarEmpleadoMutation, eliminarEmpleadoMutation, actualizarImagenMutation, eliminarImagenEmpleadoMutation } = apiQueryEmpleado();

    const [touched, setTouched] = useState<boolean>(false);
    const [empleado, setEmpleado] = useState<IEmpleado>(getInitialEmpleado());
    const [empleadoImagen, setEmpleadoImagen] = useState<EmpleadoImagen>(getInitialEmpleadoImagen());

    /*=========== Recargar ==============================*/

    function getInitialEmpleado(): IEmpleado {
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
            DireccionResidencia: "",
            CiudadResidencia: "",
            EstadoCivil: "",
            Cargo: "",
            Rol: 0,
            Estado: 1,
        }
    }

    function getInitialEmpleadoImagen(): EmpleadoImagen {
        return {
            id: null,
            imagen: null
        }
    }

    function getInitialFilters(): FiltersEmpleado {
        return {
            Nombre: "",
            Apellidos: "",
            Documento: "",
        }
    }

    const recargar = (): void => {
        setTouched(false);
        setEmpleado(getInitialEmpleado());
        setEmpleadoImagen(getInitialEmpleadoImagen());
    };

    const abrirModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    };

    /*=========== Agregar ==============================*/

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = target;
        setEmpleado((prev) => {
            const parsedValue = name === "Rol" ? Number(value) : value;
            const updated = { ...prev, [name]: parsedValue };
            if (name === "Rol" && Number(value) === 6) {
                updated.Cargo = "Portero"
            } else if (name === "Rol" && Number(value) !== 6) {
                updated.Cargo = ""
            }
            return updated;
        });
    };

    const handleSubmit = (): void => {
        setTouched(true);
        createEmpleadoMutation(empleado, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al crear el empleado: ${error.message}`); },
        });
    };

    /*=========== Consultar ==============================*/

    const debouncedNombre = useDebounce(filters.Nombre, 500);
    const debouncedApellidos = useDebounce(filters.Apellidos, 500);
    const debouncedDocumento = useDebounce(filters.Documento, 500);

    const debouncedFilters = {
        ...filters, Nombre: debouncedNombre, Apellidos: debouncedApellidos, Documento: debouncedDocumento,
    };

    const { data, isLoading } = getEmpleadosQuery(page, limit, debouncedFilters);
    const empleados = data?.data || [];
    const total = data?.total || 0;

    /*=========== Actualizar ==============================*/

    const cargar = (empleado: IEmpleado): void => {
        setEmpleado(empleado);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        setTouched(true);
        actualizarEmpleadoMutation(empleado, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    abrirModal();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al actualizar el empleado: ${error.message}`); },
        });
    };

    /*=========== Cambiar imagen ==============================*/

    const switchModalImagen = (): void => {
        toggleModal("imagen");
        recargar();
    };

    const cargarImagen = (id: number, imagen: string): void => {
        setEmpleado((prev) => ({ ...prev, imagen }));
        setEmpleadoImagen((prev) => ({ ...prev, id }));
        toggleModal("imagen");
    };

    const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const file = files[0];
        setEmpleadoImagen({ ...empleadoImagen, imagen: file });
    };

    const handleUpdateImagen = (): void => {
        const formData = new FormData();
        if (empleadoImagen.imagen) {
            formData.append('imagen', empleadoImagen.imagen as File);
        }
        actualizarImagenMutation({ id: empleadoImagen.id, imagen: formData }, {
            onSuccess: (data) => {
                if (data.status) {
                    alertSucces(data.message);
                    switchModalImagen();
                } else {
                    data.errors.forEach((err) => alertWarning(err));
                }
            },
            onError: (error) => { alertError(`Error al cambiar la imagen del empleado: ${error.message}`); },
        });
    };

    /*=========== Eliminar ===================================*/

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este empleado?", "Si, eliminar!")) {
            eliminarEmpleadoMutation(id, {
                onSuccess: (data) => alertSucces(data.message),
                onError: (error) => alertError(`Error al eliminar el empleado: ${error.message}`),
            });
        }
    };

    /*=========== ELiminar imagen ============================*/

    const handleDeleteImagen = async (): Promise<void> => {
        if (empleadoImagen.id) {
            if (await alertConfirm("¿Seguro que quiere eliminar la imagen de este empleado?", "Si, eliminar!")) {
                eliminarImagenEmpleadoMutation(empleadoImagen.id, {
                    onSuccess: (data) => {
                        if (data.status) {
                            alertSucces(data.message);
                            switchModalImagen();
                        }
                    },
                    onError: (error) => alertError(`Error al eliminar la imagen del empleado: ${error.message}`),
                });
            }
        }
    };

    return {
        titulo: "Empleados",
        subtitulo: "Gestión de empleados del club",
        empleado,
        touched,
        tituloModal: empleado.id ? "Editar Empleado" : "Crear Empleado",
        tituloModalImagen: "Cambiar Imagen",
        modals,
        total,
        page,
        limit,
        empleados,
        isLoading,
        loading: isCreating || isUpdating,
        filters,
        empleadoImagen,
        isUpdatingImagen,
        handleFilterChange,
        limpiarFiltros,
        toggleModal: abrirModal,
        handleChange,
        handler: empleado.id ? handleUpdate : handleSubmit,
        onPageChange,
        onRowsPerPageChange,
        handleDelete,
        cargar,
        switchModalImagen,
        cargarImagen,
        handleChangeImagen,
        handleUpdateImagen,
        handleDeleteImagen
    };
}

export default useEmpleado;
