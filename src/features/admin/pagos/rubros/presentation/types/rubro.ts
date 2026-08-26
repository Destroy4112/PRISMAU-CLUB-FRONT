import type { Rubro } from "../../domain/model/rubro.model";

export type RubroModalKey = "createUpdate";

export interface RubroForm {
   rubro: string;
   valor: string;
}

export const RUBRO_FORM_INITIAL: RubroForm = {
   rubro: "",
   valor: "",
};

export type CardsRubrosProps = {
   rubros: Rubro[] | undefined;
   loading: boolean;
   limit: number,
   page: number,
   total: number,
   onPageChange: (page: number) => void,
   onRowsPerPageChange: (limit: number) => void,
   cargar: (espacio: Rubro) => void;
   handleDelete: (id: number) => void;
};

export type FormRubroProps = {
   form: RubroForm;
   touched: boolean;
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};