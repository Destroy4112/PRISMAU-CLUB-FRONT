import type { Option } from "../../domain/model/option.model";

export type OptionModalKey = "crearEditar";

export type OptionContext = {
    pregunta_id: number,
}

export const buildOptionContext = (pregunta_id: number): OptionContext => ({
    pregunta_id
})

export type OptionForm = {
    respuesta: string,
}

export const INITIAL_FORM_PREGUNTA = (): OptionForm => ({
    respuesta: "",
});

export type FormOptionProps = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ColumnsOptionProps = {
    cargar: (row: Option) => void;
    handleDelete: (id: number) => void;
}