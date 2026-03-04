import React, { useMemo, useState } from "react";

type Currency = "COP" | "USD" | "EUR";

export type RubroConfig = {
    id: string;                // "mensualidad", "cuota_baile", etc.
    nombre: string;            // "Mensualidad"
    descripcion?: string;      // "Pago fijo"
    valor: number;             // valor unitario
    moneda?: Currency;         // opcional por rubro (si no, usa global)
    requiereCuotas?: boolean;  // si pide numero de cuotas
    cuotasMin?: number;        // default 1
    cuotasMax?: number;        // default 60
    badge?: string;            // ej: "Popular", "Nuevo"
};

export type ProgramarPagoPayload = {
    anio: number;
    rubroId: string;
    valorUnitario: number;
    moneda: Currency;
    numeroCuotas?: number; // solo si requiereCuotas
    total: number;
};

type Props = {
    rubros: RubroConfig[];
    monedaDefault?: Currency;
    anioMin?: number;
    anioMax?: number;
    defaultRubroId?: string;
    onSubmit?: (payload: ProgramarPagoPayload) => Promise<void> | void;
};

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

function formatMoney(amount: number, currency: Currency) {
    try {
        return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount || 0);
    } catch {
        return `${currency} ${Number(amount || 0).toFixed(2)}`;
    }
}

function currentYear() {
    return new Date().getFullYear();
}

export default function FormProgramacion({
    rubros,
    monedaDefault = "COP",
    anioMin = 2020,
    anioMax = currentYear() + 2,
    defaultRubroId,
    onSubmit,
}: Props) {
    const firstRubroId = rubros?.[0]?.id;
    const initialRubroId = defaultRubroId ?? firstRubroId ?? "";

    const [anio, setAnio] = useState<number>(currentYear());
    const [rubroId, setRubroId] = useState<string>(initialRubroId);
    const [cuotas, setCuotas] = useState<number>(1);
    const [loading, setLoading] = useState(false);

    const rubro = useMemo(() => rubros?.find((r) => r.id === rubroId), [rubros, rubroId]);

    const requiresCuotas = !!rubro?.requiereCuotas;
    const cuotasMin = rubro?.cuotasMin ?? 1;
    const cuotasMax = rubro?.cuotasMax ?? 60;

    const currency = (rubro?.moneda ?? monedaDefault) as Currency;
    const valorUnitario = rubro?.valor ?? 0;

    const total = useMemo(() => {
        if (!rubro) return 0;
        if (!requiresCuotas) return valorUnitario;
        return valorUnitario * clamp(cuotas, cuotasMin, cuotasMax);
    }, [rubro, requiresCuotas, valorUnitario, cuotas, cuotasMin, cuotasMax]);

    const errors = useMemo(() => {
        const e: { anio?: string; rubro?: string; cuotas?: string } = {};

        if (!Number.isFinite(anio) || anio < anioMin || anio > anioMax) {
            e.anio = `Año inválido (${anioMin}–${anioMax}).`;
        }

        if (!rubro) {
            e.rubro = "Selecciona un rubro válido.";
        }

        if (requiresCuotas) {
            if (!Number.isFinite(cuotas) || cuotas < cuotasMin) e.cuotas = `Mínimo ${cuotasMin}.`;
            if (cuotas > cuotasMax) e.cuotas = `Máximo ${cuotasMax}.`;
        }

        return e;
    }, [anio, anioMin, anioMax, rubro, requiresCuotas, cuotas, cuotasMin, cuotasMax]);

    const isOk = Object.keys(errors).length === 0;

    const payload: ProgramarPagoPayload | null = useMemo(() => {
        if (!rubro) return null;
        const base: ProgramarPagoPayload = {
            anio,
            rubroId: rubro.id,
            valorUnitario,
            moneda: currency,
            total,
        };
        if (requiresCuotas) base.numeroCuotas = clamp(cuotas, cuotasMin, cuotasMax);
        return base;
    }, [anio, rubro, valorUnitario, currency, total, requiresCuotas, cuotas, cuotasMin, cuotasMax]);

    async function submit() {
        if (!isOk || !payload) return;
        try {
            setLoading(true);
            await onSubmit?.(payload);
        } finally {
            setLoading(false);
        }
    }

    // ---- UI styles (Tailwind) ----
    const shell =
        "rounded-2xl border border-gray-200 bg-white shadow-[0_14px_55px_rgba(0,0,0,0.08)]";
    const input =
        "w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-300 focus:ring-4 focus:ring-gray-100";
    const label = "text-xs font-semibold text-gray-600";
    const muted = "text-xs text-gray-500";

    return (
        <div className="w-full">
            <div className={shell}>
                {/* Top bar */}
                <div className="flex flex-col gap-3 border-b border-gray-200 p-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Programar pago</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Selecciona el rubro y configura los parámetros requeridos.
                        </p>
                    </div>

                    <button
                        type="button"
                        disabled={!isOk || loading}
                        onClick={submit}
                        className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white transition ${!isOk || loading
                                ? "cursor-not-allowed bg-gray-300"
                                : "bg-gray-900 hover:bg-black shadow-[0_10px_22px_rgba(0,0,0,0.18)]"
                            }`}
                    >
                        {loading ? "Programando..." : "Programar"}
                        <span className="opacity-80">↗</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="grid gap-4 md:grid-cols-12">
                        {/* Año */}
                        <div className="md:col-span-3">
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                                <div className="flex items-center justify-between">
                                    <div className={label}>Año</div>
                                    <div className={muted}>{anioMin}–{anioMax}</div>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-white">
                                        <span>📅</span>
                                    </div>
                                    <input
                                        className={input}
                                        inputMode="numeric"
                                        value={anio}
                                        onChange={(e) => setAnio(Number(e.target.value))}
                                        placeholder="2026"
                                    />
                                </div>
                                {errors.anio && <div className="mt-2 text-xs font-medium text-red-600">{errors.anio}</div>}
                            </div>
                        </div>

                        {/* Rubros as premium chips */}
                        <div className="md:col-span-6">
                            <div className="rounded-2xl border border-gray-200 bg-white p-4">
                                <div className="flex items-center justify-between">
                                    <div className={label}>Rubro</div>
                                    <div className={muted}>{rubros.length} disponible(s)</div>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {rubros.map((r) => {
                                        const active = r.id === rubroId;
                                        return (
                                            <button
                                                key={r.id}
                                                type="button"
                                                onClick={() => {
                                                    setRubroId(r.id);
                                                    // reset cuotas cuando cambias de rubro
                                                    setCuotas(r.cuotasMin ?? 1);
                                                }}
                                                className={`group rounded-2xl border px-3 py-2 text-left transition ${active
                                                        ? "border-gray-900 bg-gray-900 text-white"
                                                        : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm font-semibold">{r.nombre}</div>
                                                    {r.badge && (
                                                        <span
                                                            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${active ? "bg-white/15 text-white" : "bg-gray-100 text-gray-700"
                                                                }`}
                                                        >
                                                            {r.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className={`mt-0.5 text-xs ${active ? "text-gray-200" : "text-gray-500"}`}>
                                                    {r.descripcion ?? "—"}
                                                </div>

                                                <div className="mt-2 text-sm font-semibold">
                                                    {formatMoney(r.valor, (r.moneda ?? monedaDefault) as Currency)}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {errors.rubro && <div className="mt-2 text-xs font-medium text-red-600">{errors.rubro}</div>}
                            </div>
                        </div>

                        {/* Params */}
                        <div className="md:col-span-3">
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                                <div className="flex items-center justify-between">
                                    <div className={label}>Configuración</div>
                                    <div className={muted}>{rubro ? rubro.nombre : "—"}</div>
                                </div>

                                {/* Cuotas only if required */}
                                {requiresCuotas ? (
                                    <>
                                        <div className="mt-3">
                                            <div className="flex items-center justify-between">
                                                <div className="text-xs font-semibold text-gray-700">Número de cuotas</div>
                                                <div className="text-xs text-gray-500">{cuotasMin}–{cuotasMax}</div>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-white">
                                                    <span>#</span>
                                                </div>
                                                <input
                                                    className={input}
                                                    type="number"
                                                    min={cuotasMin}
                                                    max={cuotasMax}
                                                    value={cuotas}
                                                    onChange={(e) => setCuotas(Number(e.target.value))}
                                                    placeholder="Ej: 12"
                                                />
                                            </div>
                                            {errors.cuotas && <div className="mt-2 text-xs font-medium text-red-600">{errors.cuotas}</div>}
                                        </div>

                                        {/* Total pill (subtle, not a “summary card”) */}
                                        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-3">
                                            <div className="text-xs text-gray-500">Total</div>
                                            <div className="mt-1 text-base font-extrabold text-gray-900">
                                                {formatMoney(total, currency)}
                                            </div>
                                            <div className="mt-1 text-[11px] text-gray-500">
                                                {formatMoney(valorUnitario, currency)} × {clamp(cuotas, cuotasMin, cuotasMax)}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-3">
                                        <div className="text-xs text-gray-500">Total</div>
                                        <div className="mt-1 text-base font-extrabold text-gray-900">
                                            {formatMoney(total, currency)}
                                        </div>
                                        <div className="mt-1 text-[11px] text-gray-500">Pago único</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom helper row */}
                    <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-4 md:flex-row md:items-center md:justify-between">
                        <div className="text-xs text-gray-600">
                            <span className="font-semibold text-gray-900">Tip:</span>{" "}
                            si agregas nuevos rubros, solo los incluyes en el array <code className="rounded bg-gray-100 px-1">rubros</code>.
                        </div>

                        {/* Dev-only: puedes eliminar esto */}
                        <div className="text-xs text-gray-500">
                            Total calculado: <span className="font-semibold text-gray-900">{formatMoney(total, currency)}</span>
                        </div>
                    </div>

                    {/* Dev-only payload preview (quítalo si no lo quieres) */}
                    <div className="mt-3">
                        <details className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                            <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                                Ver payload (debug)
                            </summary>
                            <pre className="mt-3 overflow-auto rounded-2xl border border-gray-200 bg-white p-3 text-xs text-gray-700">
                                {JSON.stringify(payload, null, 2)}
                            </pre>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}
