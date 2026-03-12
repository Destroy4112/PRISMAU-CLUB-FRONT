import SelectField from '@shared/components/form/SelectField'
import TextAreaField from '@shared/components/form/TextAreaField'
import { STATUS } from '@shared/constants/options/Options.model'
import { FaEye } from 'react-icons/fa'
import type { FormEstadoProps } from './formulario.type'

export default function FormEstado({ estado, handleChange }: FormEstadoProps) {
  return (
    <div className='space-y-4'>
      <SelectField label='Estado' name='Estado' required handleChange={handleChange} icon={FaEye} items={STATUS}
        id='id_estado' value={estado.Estado !== -1 ? String(estado.Estado) : ""} />
      <TextAreaField label='Motivo' name='Motivo' required handleChange={handleChange} value={estado.Motivo ?? ""}
        placeholder='Escribe el motivo...' id='id_motivo' />
    </div>
  )
}
