import InputField from '@shared/components/form/InputField';
import type { ChangeEvent } from 'react';
import { FaKey } from 'react-icons/fa';

interface FormClaveProps {
   value?: string | number | undefined;
   hanleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormClave({ value, hanleChange }: FormClaveProps) {
   return (
      <>
         <InputField label='Ingrese la contraseña' name='password' type='password' icon={FaKey} id='change_password'
            value={value} handleChange={hanleChange} placeholder='Ingrese la contraseña' />
      </>
   )
}
