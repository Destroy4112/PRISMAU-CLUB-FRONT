import { CalendarClock, LoaderCircle, X, } from "lucide-react";
import type { Espacio } from "../../domain/model/espacio.model";
import type { DisponibilidadForm } from "../types/disponibilidad";
import FormDisponibilidad from "./FormDisponibilidad";

interface Props {
    open: boolean;
    espacio: Espacio | null;
    disponibilidades: DisponibilidadForm[];
    loading: boolean;
    saving: boolean;
    onClose: () => void;
    onToggleDia: (dia: DisponibilidadForm["dia"], activo: boolean,) => void;
    onChangeHora: (dia: DisponibilidadForm["dia"], campo: "inicio" | "fin", valor: string,) => void;
    onSave: () => void;
}

export default function DisponibilidadEspacio({ open, espacio, disponibilidades, loading, saving, onClose, onToggleDia, onChangeHora, onSave }: Props) {
    if (!open || !espacio) return null;

    return (
        <div className="fixed inset-0 z-50">
            <button
                type="button"
                aria-label="Cerrar panel"
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            <aside className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col bg-slate-50 shadow-2xl">
                <header className="flex items-start justify-between border-b border-slate-200 bg-white px-6 py-5">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                            <CalendarClock className="h-5 w-5" />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-slate-900">
                                Disponibilidad semanal
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {espacio.descripcion}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-6">
                    {loading ? (
                        <div className="flex min-h-72 flex-col items-center justify-center gap-3">
                            <LoaderCircle className="h-7 w-7 animate-spin text-slate-500" />

                            <p className="text-sm text-slate-500">
                                Consultando disponibilidad...
                            </p>
                        </div>
                    ) : (
                        <FormDisponibilidad disponibilidades={disponibilidades} onToggleDia={onToggleDia} onChangeHora={onChangeHora} />
                    )}
                </main>
                <footer className="flex items-center justify-end gap-3 border-t border-slate-200 bg-white px-6 py-4">
                    <button type="button" onClick={onClose}
                        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                    >
                        Cancelar
                    </button>

                    <button type="button" onClick={onSave} disabled={saving || loading}
                        className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        {saving && (<LoaderCircle className="h-4 w-4 animate-spin" />)}
                        {saving ? "Guardando..." : "Guardar disponibilidad"}
                    </button>
                </footer>

            </aside>
        </div>
    );
}