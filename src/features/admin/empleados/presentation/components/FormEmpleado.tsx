import InputField from '@shared/components/form/InputField';
import SelectField from '@shared/components/form/SelectField';
import { ESTADOS_CIVILES, ESTADOS_NORMAL, GENEROS, TIPOS_DOCUMENTOS, TIPOS_EMPLEADOS } from '@shared/constants/options/Options.model';
import { inputValidation } from '@shared/utilities/validation/input.validation.utility';
import { FaCalendarAlt, FaCity, FaEnvelope, FaEye, FaIdCard, FaKeyboard, FaMapMarkerAlt, FaMercury, FaPhoneAlt, FaSuitcase, FaUserCog, FaUserTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import type { FormEmpleadoProps } from '../types/empleado';

function FormEmpleados({ form, touched, handleChange }: FormEmpleadoProps) {

    return (
        <div className='space-y-6'>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Nombres' name='nombre' type='text' icon={FaKeyboard} required id='nombre'
                    value={form.nombre} handleChange={handleChange} placeholder='Escribe los nombres...'
                    classInput={inputValidation(form.nombre, touched)} />
                <InputField label='Apellidos' name='apellidos' type='text' icon={FaKeyboard} required id='apellidos'
                    value={form.apellidos} handleChange={handleChange} placeholder='Escribe los apellidos...'
                    classInput={inputValidation(form.apellidos, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <SelectField label='Tipo Documento' name='tipoDocumento' icon={FaIdCard} required id='tipodocumento'
                    items={TIPOS_DOCUMENTOS} value={form.tipoDocumento} handleChange={handleChange}
                    clase='sm:w-1/2' classInput={inputValidation(form.tipoDocumento, touched)} />
                <InputField label='Documento' name='documento' type='number' icon={FaIdCard} required id='documento'
                    value={form.documento} handleChange={handleChange} placeholder='Escribe el documento...'
                    clase='sm:w-1/2' classInput={inputValidation(form.documento, touched)} />
                <InputField label='Correo' name='correo' type='email' icon={FaEnvelope} required id='correo'
                    value={form.correo} handleChange={handleChange} placeholder='Escribe el correo...'
                    classInput={inputValidation(form.correo, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Telefono' name='telefono' type='tel' icon={FaPhoneAlt} required id='telefono'
                    value={form.telefono} handleChange={handleChange} placeholder='Digite el numero de telefono...'
                    classInput={inputValidation(form.telefono, touched)} />
                <InputField label='Fecha Nacimiento' name='fechaNacimiento' type='date' required icon={FaCalendarAlt}
                    value={form.fechaNacimiento ? form.fechaNacimiento : ""} handleChange={handleChange}
                    id='fechanacimiento' placeholder='Escribe los nombres...' classInput={inputValidation(form.fechaNacimiento, touched)} />
                <InputField label='Lugar Nacimiento' name='lugarNacimiento' type='text' required icon={FaMapLocation}
                    value={form.lugarNacimiento} handleChange={handleChange} id='lugarnacimiento'
                    classInput={inputValidation(form.lugarNacimiento, touched)} placeholder='Escribe el lugar de nacimiento...' />
                <SelectField label='Género' name='sexo' icon={FaMercury} required items={GENEROS} id='sexo'
                    value={form.sexo} handleChange={handleChange} classInput={inputValidation(form.sexo, touched)} />
                <SelectField label='Estado Civil' name='estadoCivil' icon={FaUserTag} items={ESTADOS_CIVILES}
                    id='estadocivil' value={form.estadoCivil} handleChange={handleChange}
                    classInput={inputValidation(form.estadoCivil, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Dirección Residencia' name='direccionResidencia' type='text' icon={FaMapMarkerAlt}
                    value={form.direccionResidencia} handleChange={handleChange} id='direccionresidencia' required
                    classInput={inputValidation(form.direccionResidencia, touched)} placeholder='Escribe la direccion de residencia...' />
                <InputField label='Ciudad Residencia' name='ciudadResidencia' type='text' icon={FaCity} required
                    value={form.ciudadResidencia} handleChange={handleChange} id='ciudadresidencia'
                    classInput={inputValidation(form.ciudadResidencia, touched)} placeholder='Escribe la ciudad de residencia...' />
                <SelectField label='Tipo de Empleado' name='rol' icon={FaUserCog} id='rol' required
                    items={TIPOS_EMPLEADOS} value={form.rol ?? ""} handleChange={handleChange}
                    classInput={inputValidation(form.rol!, touched)} />
                {(form.rol === 4 || form.rol === 7) &&
                    <InputField label='Cargo' name='cargo' type='text' icon={FaSuitcase} id='cargo'
                        value={form.cargo} handleChange={handleChange} placeholder='Escribe el cargo...' />
                }
                <SelectField label='Estado' name='estado' icon={FaEye} id='estado' required
                    items={ESTADOS_NORMAL} value={form.estado} handleChange={handleChange}
                    classInput={inputValidation(form.estado, touched)} />
            </div>
        </div>
    );
}

export default FormEmpleados;