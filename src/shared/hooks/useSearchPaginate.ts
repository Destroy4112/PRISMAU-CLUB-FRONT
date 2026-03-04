import { useState, type ChangeEvent } from 'react';

export function useSearchPaginate<TFilters extends Record<string, any>>(initialFilters: TFilters) {
    const [filters, setFilters] = useState<TFilters>(initialFilters);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(30);

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
        setPage(1);
    };

    const limpiarFiltros = () => {
        setFilters(initialFilters);
        setPage(1);
    };

    const onPageChange = (newPage: number) => setPage(newPage);

    const onRowsPerPageChange = (newLimit: number) => {
        setLimit(newLimit);
        setPage(1);
    };

    return {
        filters,
        page,
        limit,
        setFilters,
        handleFilterChange,
        limpiarFiltros,
        onPageChange,
        onRowsPerPageChange,
    };
}
