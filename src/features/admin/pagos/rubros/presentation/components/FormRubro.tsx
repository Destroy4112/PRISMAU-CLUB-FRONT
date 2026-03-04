import InputField from '@shared/components/form/InputField'
import { FaDollarSign, FaKeyboard } from 'react-icons/fa'
import type { FormRubroProps } from '../types/rubro'

export default function FormRubro({ form, handleChange }: FormRubroProps) {

    return (
        <div className='space-y-4'>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Descripción del Rubro' id='rubro' name='rubro' type='text' icon={FaKeyboard} required
                    value={form.rubro} handleChange={handleChange} placeholder='Escribe la descripción...' />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Valor del Rubro' id='valor' name='valor' type='number' icon={FaDollarSign} required
                    value={form.valor} handleChange={handleChange} placeholder='Escribe el valor...' />
            </div>
        </div>
    )
}
