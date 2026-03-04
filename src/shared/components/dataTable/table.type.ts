import type { TableColumn } from "react-data-table-component"

export type TableProps<T> = {
    total?: number | undefined,
    page?: number | undefined,
    limit?: number | undefined,
    data: T[] | undefined,
    columns: TableColumn<T>[],
    loading: boolean,
    onPageChange?: (page: number) => void | undefined,
    onRowsPerPageChange?: (page: number) => void | undefined
}