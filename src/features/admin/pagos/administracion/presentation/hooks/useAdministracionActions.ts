import { useAppNavigate } from "@app/routes/hooks";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { useState } from "react";
import { socioEditValueFormToUpdateInput } from "../mapper/administracion-form.mapper";
import { useUpdateSocioValueMutation } from "../mutations/useUpdateSocioValueMutation";
import type { EditableSocioField, EditValorForm } from "../types/administracion";

export default function useAdministracionActions() {
    const navigate = useAppNavigate();

    const [edit, setEdit] = useState<EditValorForm | null>(null);

    const startEdit = (data: EditValorForm): void => {
        setEdit(data);
    };

    const cancelEdit = (): void => {
        setEdit(null);
    };

    const changeEditValue = (value: string): void => {
        setEdit(prev => {
            if (!prev) return null;
            return { ...prev, value, };
        });
    };

    const { mutate: updateSocioMutation, isPending: loading } = useUpdateSocioValueMutation({
        onOk: () => { setEdit(null); }
    });

    const saveEdit = (): void => {
        if (!edit) return;
        updateSocioMutation(socioEditValueFormToUpdateInput(edit));
    };

    const go = (field: EditableSocioField, documento: string) => {
        if (field === "mensualidad") {
            navigate(PRIVATE_ROUTES.MENSUALIDADES, { state: { documento }, replace: true });
        } else {
            navigate(PRIVATE_ROUTES.CUOTAS_BAILE, { state: { documento }, replace: true });
        }
    };

    return {
        edit,
        loading,
        startEdit,
        cancelEdit,
        changeEditValue,
        saveEdit,
        go
    };
}