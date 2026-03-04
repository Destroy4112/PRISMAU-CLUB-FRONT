import { FaEnvelope, FaIdCard, FaKey, FaKeyboard, FaPhoneAlt } from 'react-icons/fa';
import type { FormAdminProps } from '../types/admin';
import InputField from '@shared/components/form/InputField';

function FormAdmin({ isEditing, form, hanleChange }: FormAdminProps) {

    return (
        <>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Nombres' name='Nombre' type='text' icon={FaKeyboard} id='nombres'
                    value={form.Nombre} handleChange={hanleChange} placeholder='Escribe los nombres...' />
                <InputField label='Apellidos' name='Apellidos' type='text' icon={FaKeyboard} id='apellidos'
                    value={form.Apellidos} handleChange={hanleChange} placeholder='Escribe los apellidos...' />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <InputField label='Documento' name='Documento' type='text' icon={FaIdCard} id='documento'
                    value={form.user.Documento} handleChange={hanleChange} placeholder='Escribe el documento...' />
                {!isEditing &&
                    <InputField label='Contraseña' name='password' type='password' icon={FaKey} id='password'
                        value={form.user.password} handleChange={hanleChange} placeholder='Escribe la contraseña...' />
                }
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <InputField label='Correo' name='Correo' type='email' icon={FaEnvelope} id='correo'
                    value={form.Correo} handleChange={hanleChange} placeholder='Escribe el correo...' />
                <InputField label='Tel&eacute;fono' name='Telefono' type='text' icon={FaPhoneAlt} id='telefono'
                    value={form.Telefono} handleChange={hanleChange} placeholder='Escribe el tel&eacute;fono...' />
            </div>
        </>
    );
}

export default FormAdmin;