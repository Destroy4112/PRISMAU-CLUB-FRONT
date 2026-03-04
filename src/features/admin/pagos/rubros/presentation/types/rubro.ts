import type { Rubro } from "../../domain/rubro.model";
import type { RubroForm } from "./rubro.form";

export type CardsRubrosProps = {
    rubros: Rubro[] | undefined;
    loading: boolean;
    page: number;
    total: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    cargar: (espacio: Rubro) => void;
    handleDelete: (id: number) => void;
};

export type FormRubroProps = {
    form: RubroForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};