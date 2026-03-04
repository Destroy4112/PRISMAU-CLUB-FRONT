import type { BotonLimpiarProps } from './ui.type'

export default function BotonLimpiar({ label, limpiar }: BotonLimpiarProps) {
    return (
        <button
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={limpiar}>
            {label}
        </button>
    )
}
