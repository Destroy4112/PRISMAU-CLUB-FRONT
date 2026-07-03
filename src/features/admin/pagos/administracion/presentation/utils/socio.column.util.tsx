import { formatearMoneda } from "@shared/utilities/convertidores/normalizeText";
import { Spinner } from "flowbite-react";
import { FaEdit, FaSave } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import type { Socio } from "../../domain/models/socio.model";
import type { EditValorForm } from "../types/administracion";

type EditableMoneyField = "mensualidad" | "cuotaBaile";

interface Props {
    row: Socio;
    edit: EditValorForm | null;
    loading: boolean;
    field: EditableMoneyField;
    title: string;
    startEdit: (data: EditValorForm) => void;
    changeEditValue: (value: string) => void;
    saveEdit: () => void;
    cancelEdit: () => void;
}

export const renderEditableCell = ({ row, edit, field, title, loading, startEdit, changeEditValue, saveEdit, cancelEdit, }: Props) => {

    const currentValue = row[field];
    const isEditing = edit?.documento === row.documento && edit?.field === field;

    return (
        <div className="flex items-center gap-2">
            {isEditing ? (
                <>
                    <input type="number" className="border border-gray-300 rounded p-1 w-24"
                        value={edit.value} onChange={e => changeEditValue(e.target.value)} />
                    <button onClick={saveEdit} className="w-7 h-7 bg-green-500 text-white rounded-lg flex justify-center items-center" title="Guardar">
                        {loading ? <Spinner /> : <FaSave />}
                    </button>
                    <button onClick={cancelEdit} className="w-7 h-7 bg-red-500 text-white rounded-lg flex justify-center items-center" title="Cancelar">
                        <FaX />
                    </button>
                </>
            ) : (
                <>
                    <span>{formatearMoneda(Number(currentValue ?? 0))}</span>
                    <button onClick={() => startEdit({ documento: row.documento, field, value: String(currentValue ?? 0), })}
                        className="rounded-lg w-7 h-7 bg-blue-600 text-white flex justify-center items-center cursor-pointer" title={title}
                    >
                        <FaEdit />
                    </button>
                </>
            )}
        </div>
    );
};