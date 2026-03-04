import type { FormImagenProps } from "./formulario.type";

export default function FormImagen({ value, label, name, handleChange, deleteImagen }: FormImagenProps) {
    return (
        <div className="w-full flex flex-col gap-4">
            {value && (
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900">
                                Imagen actual
                            </span>
                        </div>
                        <img src={value} alt="Imagen actual" className="w-32 h-32 object-cover rounded-md border" />
                    </div>
                    {deleteImagen &&
                        <div className="w-full">
                            <button onClick={deleteImagen} className="text-sm font-medium text-red-600 bg-white border border-red-600 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 py-1 px-2">
                                Eliminar imagen
                            </button>
                        </div>
                    }
                </div>
            )}
            <div className="w-full">
                <label htmlFor={"id_" + name} className="block mb-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                    id={"id_" + name} type="file" name={name} onChange={handleChange} accept="image/png, image/jpeg" />
                <p className="mt-1 text-sm text-gray-500" id="file_input_help">PNG, JPG (MAX. 5MB).</p>
            </div>
        </div>
    )
}
