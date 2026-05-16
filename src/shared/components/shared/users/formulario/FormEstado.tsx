import SelectField from '@shared/components/form/SelectField'
import TextAreaField from '@shared/components/form/TextAreaField'
import { STATUS } from '@shared/constants/options/Options.model'
import { FaEye } from 'react-icons/fa'
import type { FormEstadoProps } from './formulario.type'

export default function FormEstado({ estado, handleChange }: FormEstadoProps) {
    return (
        <div className='space-y-4'>
            <SelectField label='Estado' name='estado' required handleChange={handleChange} icon={FaEye} items={STATUS}
                id='id_estado' value={estado.estado !== -1 ? String(estado.estado) : ""} />
            <TextAreaField label='Motivo' name='motivo' required handleChange={handleChange} value={estado.motivo ?? ""}
                placeholder='Escribe el motivo...' id='id_motivo' />
        </div>
    )
}
