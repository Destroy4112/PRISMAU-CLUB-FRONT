import InputField from '@components/form/InputField';
import SelectField from '@components/form/SelectField';
import { ESTADOS_CIVILES, ESTADOS_NORMAL, GENEROS, TIPOS_DOCUMENTOS, TIPOS_EMPLEADOS } from '@models/options/Options.model';
import { inputValidation } from '@utils/validation/input.validation.utility';
import { FaCalendarAlt, FaCity, FaEnvelope, FaEye, FaIdCard, FaKeyboard, FaMapMarkerAlt, FaMercury, FaPhoneAlt, FaSuitcase, FaUserCog, FaUserTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import type { FormEmpleadoProps } from '../types/empleado';

function FormEmpleado({ empleado, touched, handleChange }: FormEmpleadoProps) {

    return (
        <div className='space-y-6'>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Nombres' name='Nombre' type='text' icon={FaKeyboard} required id='nombre'
                    value={empleado.Nombre} handleChange={handleChange} placeholder='Escribe los nombres...'
                    classInput={inputValidation(empleado.Nombre, touched)} />
                <InputField label='Apellidos' name='Apellidos' type='text' icon={FaKeyboard} required id='apellidos'
                    value={empleado.Apellidos} handleChange={handleChange} placeholder='Escribe los apellidos...'
                    classInput={inputValidation(empleado.Apellidos, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <SelectField label='Tipo Documento' name='TipoDocumento' icon={FaIdCard} required id='tipodocumento'
                    items={TIPOS_DOCUMENTOS} value={empleado.TipoDocumento} handleChange={handleChange}
                    clase='sm:w-1/2' classInput={inputValidation(empleado.TipoDocumento, touched)} />
                <InputField label='Documento' name='Documento' type='number' icon={FaIdCard} required id='documento'
                    value={empleado.Documento} handleChange={handleChange} placeholder='Escribe el documento...'
                    clase='sm:w-1/2' classInput={inputValidation(empleado.Documento, touched)} />
                <InputField label='Correo' name='Correo' type='email' icon={FaEnvelope} required id='correo'
                    value={empleado.Correo} handleChange={handleChange} placeholder='Escribe el correo...'
                    classInput={inputValidation(empleado.Correo, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Telefono' name='Telefono' type='tel' icon={FaPhoneAlt} required id='telefono'
                    value={empleado.Telefono} handleChange={handleChange} placeholder='Digite el numero de telefono...'
                    classInput={inputValidation(empleado.Telefono, touched)} />
                <InputField label='Fecha Nacimiento' name='FechaNacimiento' type='date' required icon={FaCalendarAlt}
                    value={empleado.FechaNacimiento ? empleado.FechaNacimiento : ""} handleChange={handleChange}
                    id='fechanacimiento' placeholder='Escribe los nombres...' classInput={inputValidation(empleado.FechaNacimiento, touched)} />
                <InputField label='Lugar Nacimiento' name='LugarNacimiento' type='text' required icon={FaMapLocation}
                    value={empleado.LugarNacimiento} handleChange={handleChange} id='lugarnacimiento'
                    classInput={inputValidation(empleado.LugarNacimiento, touched)} placeholder='Escribe el lugar de nacimiento...' />
                <SelectField label='Género' name='Sexo' icon={FaMercury} required items={GENEROS} id='sexo'
                    value={empleado.Sexo} handleChange={handleChange} classInput={inputValidation(empleado.Sexo, touched)} />
                <SelectField label='Estado Civil' name='EstadoCivil' icon={FaUserTag} items={ESTADOS_CIVILES}
                    id='estadocivil' value={empleado.EstadoCivil} handleChange={handleChange}
                    classInput={inputValidation(empleado.EstadoCivil, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Dirección Residencia' name='DireccionResidencia' type='text' icon={FaMapMarkerAlt}
                    value={empleado.DireccionResidencia} handleChange={handleChange} id='direccionresidencia' required
                    classInput={inputValidation(empleado.DireccionResidencia, touched)} placeholder='Escribe la direccion de residencia...' />
                <InputField label='Ciudad Residencia' name='CiudadResidencia' type='text' icon={FaCity} required
                    value={empleado.CiudadResidencia} handleChange={handleChange} id='ciudadresidencia'
                    classInput={inputValidation(empleado.CiudadResidencia, touched)} placeholder='Escribe la ciudad de residencia...' />
                <SelectField label='Tipo de Empleado' name='Rol' icon={FaUserCog} id='rol' required
                    items={TIPOS_EMPLEADOS} value={empleado.Rol} handleChange={handleChange}
                    classInput={inputValidation(empleado.Rol, touched)} />
                {(empleado.Rol === 4 || empleado.Rol === 7) &&
                    <InputField label='Cargo' name='Cargo' type='text' icon={FaSuitcase} id='cargo'
                        value={empleado.Cargo} handleChange={handleChange} placeholder='Escribe el cargo...' />
                }
                <SelectField label='Estado' name='Estado' icon={FaEye} id='estado' required
                    items={ESTADOS_NORMAL} value={empleado.Estado} handleChange={handleChange}
                    classInput={inputValidation(empleado.Estado, touched)} />
            </div>
        </div>
    );
}

export default FormEmpleado;