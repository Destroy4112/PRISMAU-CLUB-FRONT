import SelectField from '@components/form/SelectField'
import TextAreaField from '@components/form/TextAreaField'
import { STATUS } from '@models/options/Options.model'
import { FaEye } from 'react-icons/fa'
import type { FormEstadoProps } from './formulario.type'

export default function FormEstado({ estado, handleChange }: FormEstadoProps) {
  return (
    <div className='space-y-4'>
      <SelectField label='Estado' name='Estado' required handleChange={handleChange} icon={FaEye} items={STATUS}
        id='id_estado' value={estado.Estado} />
      <TextAreaField label='Motivo' name='Motivo' required handleChange={handleChange} value={estado.Motivo}
        id='id_motivo' />
    </div>
  )
}
