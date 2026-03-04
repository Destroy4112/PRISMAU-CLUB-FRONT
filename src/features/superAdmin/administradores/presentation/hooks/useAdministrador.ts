import { useDebounce } from "@shared/hooks/useDebounce";
import useModals from "@shared/hooks/useModal";
import { useSearchPaginate } from "@shared/hooks/useSearchPaginate";
import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useMemo, useState, type ChangeEvent } from "react";
import type { AdministradorFilter } from "../../domain/administrador.filters";
import type { Administrador, AdministradorId } from "../../domain/administrador.model";
import { useCreateAdministradorMutation } from "../mutations/useCreateAdministradorMutation";
import { useDeleteAdministradorMutation } from "../mutations/useDeleteAdministradorMutation";
import { useUpdateAdministradorMutation } from "../mutations/useUpdateAdministradorMutation";
import { useUpdatePasswordAdministradorMutation } from "../mutations/useUpdatePasswordAdministradorMutation";
import { useUpdateStatusAdministradorMutation } from "../mutations/useUpdateStatusAdministradorMutation";
import { useAdministradorQuery } from "../queries/useAdministradorQuery";
import { INITIAL_FILTERS_ADMIN } from "../types/admin";
import { ADMINISTRADOR_FORM_INITIAL, type AdministradorForm } from "../types/administrador.form";

function useAdministrador() {

    const { modals, toggleModal } = useModals();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<AdministradorFilter>(INITIAL_FILTERS_ADMIN);

    const [admin, setAdmin] = useState<AdministradorForm>(ADMINISTRADOR_FORM_INITIAL);
    const [editId, setEditId] = useState<AdministradorId | null>(null);

    //--------------------- RECARGAR -----------------------------------------

    const isEditing = editId != null;

    const recargar = (): void => {
        setAdmin(ADMINISTRADOR_FORM_INITIAL);
        setEditId(null);
        limpiarFiltros();
    };

    const swicthModal = (): void => {
        toggleModal("crearEditar");
        recargar();
    };

    //--------------------- CONSULTAR --------------------------------------------

    const debounceNombres = useDebounce(filters.Nombre, 500);
    const debounceApellidos = useDebounce(filters.Apellidos, 500);

    const debouncedFilters = useMemo(() => ({ ...filters, Nombre: debounceNombres, Apellidos: debounceApellidos }), [filters, debounceNombres, debounceApellidos]);

    const { data, isLoading } = useAdministradorQuery({ page, limit, filters: debouncedFilters });
    const admins: Administrador[] = data?.data || [];
    const total = data?.total || 0;

    //--------------------- CREATE ----------------------------------------------

    const { mutate: createAdminMutation, isPending: isCreating } = useCreateAdministradorMutation({
        onOk: () => swicthModal(),
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        if (name === "Documento" || name === "password") {
            setAdmin({ ...admin, user: { ...admin.user, [name]: value } });
        } else {
            setAdmin({ ...admin, [name]: value });
        }
    };

    const handleSubmit = (): void => {
        createAdminMutation(admin);
    };

    //--------------------- EDITAR ------------------------------------------------

    const { mutate: actualizarAdminMutation, isPending: isUpdating } = useUpdateAdministradorMutation({
        onOk: () => swicthModal(),
    });

    const cargar = (admin: Administrador): void => {
        setEditId(admin.id!);
        setAdmin(admin);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        actualizarAdminMutation({ id: editId!, ...admin });
    };

    //--------------------- CAMBIO DE ESTADO ---------------------------------------

    const { mutate: cambiarEstadoMutation } = useUpdateStatusAdministradorMutation();

    const handleUpdateStatus = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere cambiar el estado de este admin?", "Si, cambiar!")) {
            cambiarEstadoMutation(id);
        }
    };

    //--------------------- CAMBIO DE CLAVE ---------------------------------------

    const { mutate: changePasswordMutation, isPending: isChanging } = useUpdatePasswordAdministradorMutation({
        onOk: () => switchModalClave(),
    });

    const cambiarClave = (id: number): void => {
        setAdmin((prev) => ({ ...prev, user: { ...prev.user, id } }));
        toggleModal("clave");
    };

    const switchModalClave = (): void => {
        toggleModal("clave");
        recargar();
    };

    const handleUpdateClave = (): void => {
        changePasswordMutation({ id: admin.user.id!, password: admin.user.password! });
    };

    //--------------------- ELIMINAR ----------------------------------------------

    const { mutate: eliminarAdminMutation } = useDeleteAdministradorMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este admin?", "Si, eliminar!")) {
            eliminarAdminMutation(id);
        }
    };

    return {
        titulo: "Administradores",
        subtitulo: "Gestión de usuarios con privilegios administrativos",
        admin,
        tituloModal: isEditing ? "Editar Administrador" : "Crear Administrador",
        tituloModalClave: "Cambiar clave",
        modals,
        isLoading,
        loading: isCreating || isUpdating,
        isEditing,
        admins,
        total,
        page,
        limit,
        filters,
        isChanging,
        onPageChange,
        onRowsPerPageChange,
        handleFilterChange,
        limpiarFiltros,
        handleChange,
        toggleModal: swicthModal,
        cargar,
        handler: isEditing ? handleUpdate : handleSubmit,
        handleDelete,
        handleUpdateStatus,
        cambiarClave,
        handleUpdateClave,
        switchModalClave,
    };
}

export default useAdministrador;
