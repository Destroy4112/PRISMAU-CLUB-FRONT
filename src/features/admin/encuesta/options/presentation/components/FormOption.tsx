import InputField from '@shared/components/form/InputField'
import type { FormOptionProps } from '../types/option'

export default function FormOption({ value, handleChange }: FormOptionProps) {
    return (
        <div className="w-full">
            <InputField label="Descripción de la opcion" id='id_opcion' name="respuesta" required
                value={value} handleChange={handleChange} placeholder={`Ingrese la descripción de la opcion...`} />
        </div>
    )
}
