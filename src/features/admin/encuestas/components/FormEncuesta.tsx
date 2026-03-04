import InputField from '@components/form/InputField'
import TextAreaField from '@components/form/TextAreaField'
import { FaKeyboard } from 'react-icons/fa'
import type { FormEncuestaProps } from '../types/encuesta'

function FormEncuesta({ encuesta, handleChange }: FormEncuestaProps) {
    return (
        <div className="max-w-full flex flex-col space-y-4">
            <InputField label='Titulo de la encuestal' id='id_titulo' name='Titulo' icon={FaKeyboard} required
                value={encuesta.Titulo} handleChange={handleChange} placeholder='Ingrese el titulo de la encuesta...' />
            <TextAreaField label='Descripción de la encuesta' id='id_descripcion' name='Descripcion' required
                value={encuesta.Descripcion} handleChange={handleChange} />
        </div>
    )
}

export default FormEncuesta