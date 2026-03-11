import { FaSearch, FaUser } from "react-icons/fa";
import type { BuscadorUserProps } from "../types/busquedaUser";

export default function BuscadorUsuario({ busqueda, handleChange, handleSubmit }: BuscadorUserProps) {


    return (
        <div className="w-full max-w-2xl my-3">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FaUser className="w-4 h-4 text-gray-400" />
                </div>

                <input type="text" id="search" value={busqueda} onChange={handleChange} placeholder="Ingrese el número de documento"
                    className="w-full rounded-full border border-gray-300 bg-white pl-11 pr-28 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    autoComplete="off" />

                <button type="button" onClick={handleSubmit}
                    className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    <FaSearch className="w-4 h-4" />
                    <span className="hidden sm:inline">Buscar</span>
                </button>
            </div>
        </div>
    );
}