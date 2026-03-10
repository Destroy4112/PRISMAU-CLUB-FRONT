import InputField from '@shared/components/form/InputField'
import type { FormPreguntaProps } from '../types/pregunta'

export default function FormPregunta({ value, handleChange }: FormPreguntaProps) {
    return (
        <div className="w-full">
            <InputField label="Descripción de la pregunta" id='id_pregunta' name="Pregunta" required
                value={value} handleChange={handleChange} placeholder={`Ingrese la descripción de la pregunta...`} />
        </div>
    )
}
