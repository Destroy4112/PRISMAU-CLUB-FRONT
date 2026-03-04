import InputField from '@components/form/InputField';
import SelectField from '@components/form/SelectField';
import { ESTADOS_CIVILES, GENEROS, TIPOS_DOCUMENTOS } from '@models/options/Options.model';
import { inputValidation } from '@utils/validation/input.validation.utility';
import { FaCalendarAlt, FaCity, FaCode, FaEnvelope, FaIdCard, FaKeyboard, FaMapMarkerAlt, FaMercury, FaPhoneAlt, FaSortNumericUp, FaSuitcase, FaUserGraduate, FaUserTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import type { FormAsociadoProps } from '../types/asociado';

function FormAsociados({ asociado, touched, handleChange }: FormAsociadoProps) {

    return (
        <div className='space-y-6'>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Nombres' name='Nombre' type='text' icon={FaKeyboard} required id='nombre'
                    value={asociado.Nombre} handleChange={handleChange} placeholder='Escribe los nombres...'
                    classInput={inputValidation(asociado.Nombre, touched)} />
                <InputField label='Apellidos' name='Apellidos' type='text' icon={FaKeyboard} required id='apellidos'
                    value={asociado.Apellidos} handleChange={handleChange} placeholder='Escribe los apellidos...'
                    classInput={inputValidation(asociado.Apellidos, touched)} />
                <InputField label='Codigo' name='Codigo' type='text' icon={FaCode} required id='codigo'
                    value={asociado.Codigo} handleChange={handleChange} placeholder='Escribe el codigo...'
                    classInput={inputValidation(asociado.Codigo, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <SelectField label='Tipo Documento' name='TipoDocumento' icon={FaIdCard} required id='tipodocumento'
                    items={TIPOS_DOCUMENTOS} value={asociado.TipoDocumento} handleChange={handleChange}
                    clase='sm:w-1/2' classInput={inputValidation(asociado.TipoDocumento, touched)} />
                <InputField label='Documento' name='Documento' type='number' icon={FaIdCard} required id='documento'
                    value={asociado.Documento} handleChange={handleChange} placeholder='Escribe el documento...'
                    clase='sm:w-1/2' classInput={inputValidation(asociado.Documento, touched)} />
                <InputField label='Correo' name='Correo' type='email' icon={FaEnvelope} required id='correo'
                    value={asociado.Correo} handleChange={handleChange} placeholder='Escribe el correo...'
                    classInput={inputValidation(asociado.Correo, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Telefono' name='Telefono' type='tel' icon={FaPhoneAlt} required id='telefono'
                    value={asociado.Telefono} handleChange={handleChange} placeholder='Digite el numero de telefono...'
                    classInput={inputValidation(asociado.Telefono, touched)} />
                <InputField label='Fecha Nacimiento' name='FechaNacimiento' type='date' icon={FaCalendarAlt}
                    value={asociado.FechaNacimiento ? asociado.FechaNacimiento : ""} handleChange={handleChange}
                    id='fechanacimiento' placeholder='Escribe los nombres...' />
                <InputField label='Lugar Nacimiento' name='LugarNacimiento' type='text' icon={FaMapLocation}
                    value={asociado.LugarNacimiento} handleChange={handleChange}
                    id='lugarnacimiento' placeholder='Escribe el lugar de nacimiento...' />
                <SelectField label='Género' name='Sexo' icon={FaMercury} required items={GENEROS} id='sexo'
                    value={asociado.Sexo} handleChange={handleChange} classInput={inputValidation(asociado.Sexo, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Dirección Residencia' name='DireccionResidencia' type='text' icon={FaMapMarkerAlt}
                    value={asociado.DireccionResidencia} handleChange={handleChange} id='direccionresidencia'
                    placeholder='Escribe la direccion de residencia...' />
                <InputField label='Ciudad Residencia' name='CiudadResidencia' type='text' icon={FaCity}
                    value={asociado.CiudadResidencia} handleChange={handleChange} id='ciudadresidencia'
                    placeholder='Escribe la ciudad de residencia...' />
                <InputField label='Tiempo Residencia' name='TiempoResidencia' type='number' icon={FaSortNumericUp}
                    value={asociado.TiempoResidencia} handleChange={handleChange} id='tiemporesidencia'
                    placeholder='Escribe el tiempo de residencia...' />
                <SelectField label='Estado Civil' name='EstadoCivil' icon={FaUserTag} items={ESTADOS_CIVILES}
                    id='estadocivil' value={asociado.EstadoCivil} handleChange={handleChange} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Profesion' name='Profesion' type='text' icon={FaUserGraduate} id='profesion'
                    value={asociado.Profesion} handleChange={handleChange} placeholder='Escribe la profesión...' />
                <InputField label='Trabajo' name='Trabajo' type='text' icon={FaSuitcase} id='trabajo'
                    value={asociado.Trabajo} handleChange={handleChange} placeholder='Escribe donde trabaja...' />
                <InputField label='Cargo' name='Cargo' type='text' icon={FaSuitcase} id='cargo'
                    value={asociado.Cargo} handleChange={handleChange} placeholder='Escribe el cargo...' />
                <InputField label='Tiempo Servicio' name='TiempoServicio' type='number' icon={FaSortNumericUp}
                    value={asociado.TiempoServicio} handleChange={handleChange} id='tiemposervicio'
                    placeholder='Digite el tiempo de servicio...' />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Teléfono Oficina' name='TelOficina' type='tel' icon={FaPhoneAlt}
                    value={asociado.TelOficina} handleChange={handleChange} id='telefonooficina'
                    placeholder='Escriba el teléfono de la oficina...' />
                <InputField label='Direccion Oficina' name='DireccionOficina' type='text' icon={FaMapMarkerAlt}
                    value={asociado.DireccionOficina} handleChange={handleChange} id='direccionoficina'
                    placeholder='Escriba la dirección  de la oficina...' />
                <InputField label='Ciudad Oficina' name='CiudadOficina' type='text' icon={FaCity}
                    value={asociado.CiudadOficina} handleChange={handleChange} id='ciudadoficina'
                    placeholder='Escriba la ciudad de la oficina...' />
            </div>
        </div>
    );
}

export default FormAsociados;