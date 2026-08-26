import InputField from '@shared/components/form/InputField'
import TextAreaField from '@shared/components/form/TextAreaField'
import { FaKeyboard } from 'react-icons/fa'
import type { FormEncuestaProps } from '../types/encuesta'

function FormEncuesta({ form, handleChange }: FormEncuestaProps) {
   return (
      <div className="max-w-full flex flex-col space-y-4">
         <InputField label='Titulo de la encuestal' id='id_titulo' name='titulo' icon={FaKeyboard} required
            value={form.titulo} handleChange={handleChange} placeholder='Ingrese el titulo de la encuesta...' />
         <TextAreaField label='Descripción de la encuesta' id='id_descripcion' name='descripcion' required
            value={form.descripcion} handleChange={handleChange} placeholder='Ingrese la descripción de la encuesta...' />
      </div>
   )
}

export default FormEncuesta