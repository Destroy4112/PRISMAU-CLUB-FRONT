import InputField from "@shared/components/form/InputField";
import SelectField from "@shared/components/form/SelectField";
import { ESTADOS_NORMAL } from "@shared/constants/options/Options.model";
import { inputValidation } from "@shared/utilities/validation/input.validation.utility";
import { ImagePlus } from "lucide-react";
import { FaEye, FaKeyboard } from "react-icons/fa";
import type { FormEspacioProps } from "../types/espacio";

function FormEspacio({ form, touched, handleChange, handleImageChange }: FormEspacioProps) {

    return (
        <>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Descripción' name='descripcion' type='text' icon={FaKeyboard} required id='descripcion'
                    value={form.descripcion} handleChange={handleChange} placeholder='Escribe la descripción...'
                    classInput={inputValidation(form.descripcion, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <SelectField label='Estado' name='estado' icon={FaEye} required id='estado'
                    items={ESTADOS_NORMAL} value={form.estado} handleChange={handleChange}
                    classInput={inputValidation(form.estado, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <label className="group flex cursor-pointer items-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-5 py-4 transition hover:border-emerald-400 hover:bg-white">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
                        {form.imagePreview ? (
                            <img src={form.imagePreview} alt="Logo" className="h-full w-full object-cover" />
                        ) : (
                            <ImagePlus className="h-6 w-6 text-emerald-600" />
                        )}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Subir logo</p>
                        <p className="text-xs text-slate-500">PNG, JPG o WEBP</p>
                    </div>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
            </div>
        </>
    );
}

export default FormEspacio;