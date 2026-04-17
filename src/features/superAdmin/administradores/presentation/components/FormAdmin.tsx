import InputField from '@shared/components/form/InputField';
import { FaEnvelope, FaIdCard, FaKey, FaKeyboard, FaPhoneAlt } from 'react-icons/fa';
import type { FormAdminProps } from '../types/admin';

function FormAdmin({ isEditing, form, hanleChange }: FormAdminProps) {

    return (
        <>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Nombres' name='nombre' type='text' icon={FaKeyboard} id='nombres'
                    value={form.nombre} handleChange={hanleChange} placeholder='Escribe los nombres...' />
                <InputField label='Apellidos' name='apellidos' type='text' icon={FaKeyboard} id='apellidos'
                    value={form.apellidos} handleChange={hanleChange} placeholder='Escribe los apellidos...' />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <InputField label='Documento' name='documento' type='text' icon={FaIdCard} id='documento'
                    value={form.user.documento} handleChange={hanleChange} placeholder='Escribe el documento...' />
                {!isEditing &&
                    <InputField label='Contraseña' name='password' type='password' icon={FaKey} id='password'
                        value={form.user.password} handleChange={hanleChange} placeholder='Escribe la contraseña...' />
                }
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <InputField label='Correo' name='correo' type='email' icon={FaEnvelope} id='correo'
                    value={form.correo} handleChange={hanleChange} placeholder='Escribe el correo...' />
                <InputField label='Tel&eacute;fono' name='telefono' type='text' icon={FaPhoneAlt} id='telefono'
                    value={form.telefono} handleChange={hanleChange} placeholder='Escribe el tel&eacute;fono...' />
            </div>
        </>
    );
}

export default FormAdmin;