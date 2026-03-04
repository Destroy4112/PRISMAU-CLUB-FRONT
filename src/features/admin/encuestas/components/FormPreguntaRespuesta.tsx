import InputField from '@components/form/InputField'
import type { FormPreguntaRespuestaProps } from '../types/encuesta'

export default function FormPreguntaRespuesta({ value, name, handleChange }: FormPreguntaRespuestaProps) {
    return (
        <div className="w-full">
            <InputField label={`Descripción de la ${name}`} id='id_pregunta' name={name} required
                value={value} handleChange={handleChange} placeholder={`Ingrese la descripción de la ${name}...`} />
        </div>
    )
}
