import { buildPaginationItems, getPaginationRange, getTotalPages } from "../utils/pagination.utils";

type Props = {
    total?: number;
    page?: number;
    limit?: number;
    rowsPerPageOptions?: number[];
    onPageChange?: (page: number) => void;
    onRowsPerPageChange?: (limit: number) => void;
};

export default function Pagination(
    { total = 0, page = 1, limit = 10, onPageChange, onRowsPerPageChange, rowsPerPageOptions = [10, 20, 30, 50, 100], }: Props
) {

    const totalPages = getTotalPages(total, limit);
    const { start, end } = getPaginationRange(total, page, limit);
    const pages = buildPaginationItems(totalPages, page);

    return (
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-white/90 px-5 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center">
                <span className="text-sm font-semibold text-slate-600">
                    Mostrando{" "}
                    <span className="font-black text-slate-900">{start}</span>{" "}
                    a{" "}
                    <span className="font-black text-slate-900">{end}</span>{" "}
                    de{" "}
                    <span className="font-black text-slate-900">{total}</span>{" "}
                    registros
                </span>

                {onRowsPerPageChange && (
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Filas por página</span>
                        <select value={limit} onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                            className="rounded-xl border border-slate-200 bg-white py-2 text-sm font-bold text-slate-700 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                        >
                            {rowsPerPageOptions.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <button onClick={() => onPageChange?.(Math.max(1, page - 1))} disabled={page <= 1}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                >
                    Anterior
                </button>

                {pages.map((item, i) =>
                    item === "..." ? (
                        <span key={`dots-${i}`} className="px-2 text-sm font-bold text-slate-400">
                            ...
                        </span>
                    ) : (
                        <button key={item} onClick={() => onPageChange?.(item)}
                            className={cn("h-10 min-w-10 rounded-xl px-3 text-sm font-black transition",
                                item === page ? "bg-slate-950 text-white shadow-lg shadow-slate-900/15"
                                    : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50")}
                        >
                            {item}
                        </button>
                    )
                )}

                <button onClick={() => onPageChange?.(Math.min(totalPages, page + 1))} disabled={page >= totalPages}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}

function cn(...classes: Array<string | undefined | false | null>) {
    return classes.filter(Boolean).join(" ");
}