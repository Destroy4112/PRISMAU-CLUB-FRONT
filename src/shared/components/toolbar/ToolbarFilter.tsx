import type { Filter, FilterState, FilterWithState, } from "@shared/constants/filters/filters.constant";
import { Search, SlidersHorizontal } from "lucide-react";
import type { ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";

export type ToolbarStatusVariant = | "dark" | "success" | "danger" | "warning" | "info" | "purple" | "neutral";

export type ToolbarStatusOption<TState extends FilterState = number | null> = {
    label: string;
    value: TState;
    variant?: ToolbarStatusVariant;
};

type Props<TState extends FilterState = number | null> = {
    entityName: string;
    campos: string;
    total: number;

    filters: Filter | FilterWithState<TState>;

    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClearSearch: () => void;

    statusOptions?: ToolbarStatusOption<TState>[];
    onStatusFilterChange?: (value: TState) => void;

    showResults?: boolean;
};

export default function ToolbarFilter<TState extends FilterState = number | null>({
    total,
    filters,
    entityName,
    campos,
    onSearchChange,
    onClearSearch,
    statusOptions,
    onStatusFilterChange,
    showResults = true,
}: Props<TState>) {

    const hasStatusFilter = Boolean(statusOptions?.length && onStatusFilterChange);

    const currentState = "state" in filters ? filters.state : undefined;

    return (
        <section className="mb-4 space-y-3">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                <div className="px-2 py-0.5">
                    <h2 className="text-xl font-bold tracking-tight text-slate-950">
                        Listado de {entityName}
                    </h2>

                    <p className="mt-0.5 max-w-2xl text-sm text-slate-500">
                        Encuentra rápidamente lo que buscas usando los filtros de busqueda.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-1.5 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                        name="search"
                        value={filters.search || ""}
                        onChange={onSearchChange}
                        placeholder={`Busca por ${campos}...`}
                        className="h-9.5 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-9 text-xs font-semibold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-3 focus:ring-slate-200/70"
                    />

                    {filters.search && (
                        <button
                            type="button"
                            onClick={onClearSearch}
                            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                        >
                            <FaTimes className="h-3.5 w-3.5 text-gray-500" />
                        </button>
                    )}
                </div>

                {hasStatusFilter && (
                    <div
                        className="grid gap-1 rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200 lg:w-auto"
                        style={{
                            gridTemplateColumns: `repeat(${statusOptions?.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {statusOptions?.map((option) => (
                            <FilterButton
                                key={String(option.value)}
                                active={currentState === option.value}
                                onClick={() => onStatusFilterChange?.(option.value)}
                                label={option.label}
                                variant={option.variant ?? "neutral"}
                            />
                        ))}
                    </div>
                )}

                {showResults && (
                    <div className="flex h-9 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 lg:justify-center">
                        <span className="inline-flex items-center gap-1.5">
                            <SlidersHorizontal size={14} />
                            Resultados
                        </span>

                        <span className="rounded-lg bg-slate-950 px-2 py-0.5 text-[11px] font-black text-white">
                            {total}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}

type FilterButtonProps = {
    active: boolean;
    label: string;
    variant: ToolbarStatusVariant;
    onClick: () => void;
};

function FilterButton({ active, label, variant, onClick }: FilterButtonProps) {
    const activeStyles: Record<ToolbarStatusVariant, string> = {
        dark: "bg-slate-950 text-white shadow-sm",
        success: "bg-emerald-600 text-white shadow-sm",
        danger: "bg-rose-600 text-white shadow-sm",
        warning: "bg-amber-500 text-white shadow-sm",
        info: "bg-sky-600 text-white shadow-sm",
        purple: "bg-purple-600 text-white shadow-sm",
        neutral: "bg-slate-700 text-white shadow-sm",
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition ${active
                ? activeStyles[variant]
                : "text-slate-500 hover:bg-slate-100"
                }`}
        >
            {label}
        </button>
    );
}