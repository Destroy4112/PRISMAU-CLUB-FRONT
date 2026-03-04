import type { AnyRow } from "@components/excel/excel.type";

export type MenuProps<T extends object = AnyRow> = {
    busqueda?: string;
    noBuscar?: boolean;
    noCrear?: boolean;
    exportar?: boolean;
    data?: T[];
    titulo?: string;
    handleBusqueda?: (value: string) => void;
    toggleModal?: () => void;
};
