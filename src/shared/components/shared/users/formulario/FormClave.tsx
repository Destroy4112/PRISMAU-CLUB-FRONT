import InputField from '@shared/components/form/InputField'
import { FaKey } from 'react-icons/fa'
import type { FormClaveProps } from './formulario.type'

export default function FormClave({ value, hanleChange }: FormClaveProps) {
    return (
        <>
            <InputField label='Ingrese la contraseña' name='password' type='password' icon={FaKey} id='change_password'
                value={value} handleChange={hanleChange} placeholder='Ingrese la contraseña' />
        </>
    )
}
