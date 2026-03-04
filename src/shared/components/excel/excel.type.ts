export type AnyRow = object;

export type ExportExcelProps<T extends object = Record<string, unknown>> = {
    data: T[];
    fileName: string;
    noCrear?: boolean;
};
