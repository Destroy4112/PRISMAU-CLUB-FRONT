import { Button, Modal, ModalBody, Spinner } from "flowbite-react";
import { HiXMark } from "react-icons/hi2";
import type { ModalProps } from "./modal.type";

function VentanaModal({ titulo, size = "full", children, show, loading = false, cerrarModal, handleSubmit, }: ModalProps) {

    return (
        <Modal show={show} size={size} onClose={cerrarModal} popup className="backdrop-blur" dismissible={!loading}>

            <div className="relative overflow-hidden rounded-xl border border-white/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 top-32 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

                <div className="relative border-b border-slate-200/80 bg-white/90 px-6 py-5 backdrop-blur-2xl">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                    <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                                        Panel de gestión
                                    </span>
                                </div>

                                <h3 className="mt-1 truncate text-xl font-black tracking-tight text-slate-950">
                                    {titulo}
                                </h3>
                            </div>
                        </div>

                        <button type="button" onClick={cerrarModal} disabled={loading}
                            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-slate-950 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <HiXMark className="text-xl transition group-hover:rotate-90" />
                        </button>
                    </div>
                </div>

                <ModalBody className="relative max-h-[72vh] overflow-y-auto bg-slate-100/70 px-2 py-3">
                    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                        {children}
                    </div>
                </ModalBody>

                <div className="sticky bottom-0 bg-slate-100/70 px-6 py-4">
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                        <Button type="button" color="alternative" onClick={cerrarModal} disabled={loading} className="rounded-2xl">
                            Cancelar
                        </Button>

                        <button type="button" onClick={handleSubmit} disabled={loading}
                            className="inline-flex h-10 items-center justify-center rounded-2xl bg-green-600 px-5 text-sm font-bold text-white shadow-lg shadow-green-500/25 transition hover:-translate-y-0.5 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Spinner size="sm" />
                                    Guardando...
                                </span>
                            ) : (
                                "Guardar"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default VentanaModal;