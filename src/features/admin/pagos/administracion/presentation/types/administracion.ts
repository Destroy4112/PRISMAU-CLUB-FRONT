export type EditableSocioField = "mensualidad" | "cuotaBaile";

export interface EditValorForm {
    documento: string;
    field: EditableSocioField;
    value: string;
}

export interface SocioColumnsProps {
    edit: EditValorForm | null;
    loading: boolean;
    startEdit: (data: EditValorForm) => void;
    cancelEdit: () => void;
    changeEditValue: (value: string) => void;
    saveEdit: () => void;
    go: (field: EditableSocioField, documento: string) => void;
}