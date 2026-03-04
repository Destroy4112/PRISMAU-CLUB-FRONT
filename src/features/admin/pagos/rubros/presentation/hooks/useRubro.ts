import { useDebounce } from '@shared/hooks/useDebounce';
import useModals from '@shared/hooks/useModal';
import { useSearchPaginate } from '@shared/hooks/useSearchPaginate';
import { alertConfirm } from '@shared/utilities/alerts/alertas.utility';
import { useMemo, useState, type ChangeEvent } from 'react';
import type { RubroFilter } from '../../domain/rubro.filters';
import type { Rubro, RubroId, RubroPayload } from '../../domain/rubro.model';
import { useCreateRubroMutation } from '../mutations/useCreateRubroMutation';
import { useDeleteRubroMutation } from '../mutations/useDeleteRubroMutation';
import { useRubrosQuery } from '../queries/useRubrosQuery';
import { RUBRO_FORM_INITIAL, type RubroForm } from '../types/rubro.form';
import { useUpdateRubroMutation } from './../mutations/useUpdateRubroMutation';

export default function useRubro() {

    const INITIAL_FILTERS: RubroFilter = { rubro: "" };

    const { modals, toggleModal } = useModals();

    const { filters, limit, page, onPageChange, onRowsPerPageChange, handleFilterChange, limpiarFiltros
    } = useSearchPaginate<RubroFilter>(INITIAL_FILTERS);

    const [rubroForm, setRubroForm] = useState<RubroForm>(RUBRO_FORM_INITIAL);
    const [editId, setEditId] = useState<RubroId | null>(null);

    //------------------ INITIAL STATE ----------------------------------------------

    const isEditing = editId != null;

    const recargar = (): void => {
        setRubroForm(RUBRO_FORM_INITIAL);
        setEditId(null);
    }

    //------------------ CONSULTAR -------------------------------------------------

    const handleChangeBusqueda = (value: string): void => {
        handleFilterChange({ target: { name: "rubro", value } } as ChangeEvent<HTMLInputElement>);
    }

    const debouncedRubro = useDebounce(filters.rubro, 500);
    const debouncedFilters = useMemo(() => ({ ...filters, rubro: debouncedRubro }), [filters, debouncedRubro]);

    const { data, isLoading } = useRubrosQuery({ page, limit, filters: debouncedFilters });
    const rubros: Rubro[] = data?.data || [];
    const total = data?.total || 0;
    const totalPages = data?.totalPages || 0;

    //------------------ CREATE --------------------------------------------

    const { mutate: createMutation, isPending: isLoadingCreate } = useCreateRubroMutation({
        onOk: () => switchModal(),
    });

    const switchModal = (): void => {
        recargar();
        toggleModal("crearEditar");
    }

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setRubroForm({ ...rubroForm, [target.name]: target.value });
    }

    const toPayload = (): RubroPayload => ({
        rubro: rubroForm.rubro,
        valor: Number(rubroForm.valor),
    });

    const handleSubmit = (): void => {
        createMutation(toPayload())
    }

    //------------------ UPDATE ------------------------------------------------

    const { mutate: updateMutation, isPending: isLoadingUpdate } = useUpdateRubroMutation({
        onOk: () => switchModal(),
    });

    const cargarRubro = (rubro: Rubro): void => {
        setEditId(rubro.id);
        setRubroForm({ rubro: rubro.rubro, valor: String(rubro.valor) });
        toggleModal("crearEditar");
    }


    const handleUpdate = (): void => {
        updateMutation({ id: editId!, ...toPayload() });
    }

    //------------------ DELETE ---------------------------------------------------

    const { mutate: eliminarMutation, isPending: isLoadingDelete } = useDeleteRubroMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar esta rubro?", "Si, eliminar!")) {
            eliminarMutation(id);
        }
    }

    return {
        titulo: 'Rubros',
        subtitulo: 'Administrar rubros',
        tituloModal: isEditing ? 'Editar rubro' : 'Crear rubro',
        loading: isLoadingCreate || isLoadingUpdate || isLoadingDelete,
        isLoading,
        modals,
        rubros,
        total,
        page,
        limit,
        totalPages,
        rubroForm,
        filters,
        onPageChange,
        onRowsPerPageChange,
        handleChangeBusqueda,
        limpiarFiltros,
        toggleModal: switchModal,
        handleChange,
        cargarRubro,
        handler: isEditing ? handleUpdate : handleSubmit,
        handleDelete
    }
}