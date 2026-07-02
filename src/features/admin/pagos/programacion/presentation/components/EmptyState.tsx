import { FaLayerGroup } from "react-icons/fa";

export default function EmptyState() {
    return (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-linear-to-b from-white to-slate-50 px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-xl text-slate-400 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
                <FaLayerGroup />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
                No hay rubros disponibles
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Registra al menos un rubro antes de realizar una
                programación de facturas.
            </p>
        </div>
    )
}