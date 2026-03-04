import InputField from '@components/form/InputField';
import SelectField from '@components/form/SelectField';
import { ESTADOS_CIVILES, GENEROS, TIPOS_DOCUMENTOS } from '@models/options/Options.model';
import { inputValidation } from '@utils/validation/input.validation.utility';
import { FaCalendarAlt, FaCity, FaCode, FaEnvelope, FaIdCard, FaKeyboard, FaMapMarkerAlt, FaMercury, FaPhoneAlt, FaSortNumericUp, FaSuitcase, FaUserGraduate, FaUserTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import type { FormAdherenteProps } from '../types/adherente';
import SelectFilterAdherente from './SelectFilterAdherente';

function FormAdherente({ adherente, touched, asociados, handleChange }: FormAdherenteProps) {

    return (
        <div className='space-y-6'>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <SelectFilterAdherente asociados={asociados} adherente={adherente} handleChange={handleChange} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Nombres' name='Nombre' type='text' icon={FaKeyboard} required id='nombre'
                    value={adherente.Nombre} handleChange={handleChange} placeholder='Escribe los nombres...'
                    classInput={inputValidation(adherente.Nombre, touched!)} />
                <InputField label='Apellidos' name='Apellidos' type='text' icon={FaKeyboard} required id='apellidos'
                    value={adherente.Apellidos} handleChange={handleChange} placeholder='Escribe los apellidos...'
                    classInput={inputValidation(adherente.Apellidos, touched!)} />
                <InputField label='Codigo' name='Codigo' type='text' icon={FaCode} required id='codigo'
                    value={adherente.Codigo} handleChange={handleChange} placeholder='Escribe el codigo...'
                    classInput={inputValidation(adherente.Codigo, touched!)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <SelectField label='Tipo Documento' name='TipoDocumento' icon={FaIdCard} required id='tipodocumento'
                    items={TIPOS_DOCUMENTOS} value={adherente.TipoDocumento} handleChange={handleChange}
                    clase='sm:w-1/2' classInput={inputValidation(adherente.TipoDocumento, touched!)} />
                <InputField label='Documento' name='Documento' type='number' icon={FaIdCard} required id='documento'
                    value={adherente.Documento} handleChange={handleChange} placeholder='Escribe el documento...'
                    clase='sm:w-1/2' classInput={inputValidation(adherente.Documento, touched!)} />
                <InputField label='Correo' name='Correo' type='email' icon={FaEnvelope} required id='correo'
                    value={adherente.Correo} handleChange={handleChange} placeholder='Escribe el correo...'
                    classInput={inputValidation(adherente.Correo, touched!)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Telefono' name='Telefono' type='tel' icon={FaPhoneAlt} required id='telefono'
                    value={adherente.Telefono} handleChange={handleChange} placeholder='Digite el numero de telefono...'
                    classInput={inputValidation(adherente.Telefono, touched!)} />
                <InputField label='Fecha Nacimiento' name='FechaNacimiento' type='date' icon={FaCalendarAlt}
                    value={adherente.FechaNacimiento ? adherente.FechaNacimiento : ""} handleChange={handleChange}
                    id='fechanacimiento' placeholder='Escribe los nombres...' />
                <InputField label='Lugar Nacimiento' name='LugarNacimiento' type='text' icon={FaMapLocation}
                    value={adherente.LugarNacimiento} handleChange={handleChange}
                    id='lugarnacimiento' placeholder='Escribe el lugar de nacimiento...' />
                <SelectField label='Género' name='Sexo' icon={FaMercury} required items={GENEROS} id='sexo'
                    value={adherente.Sexo} handleChange={handleChange} classInput={inputValidation(adherente.Sexo, touched!)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Dirección Residencia' name='DireccionResidencia' type='text' icon={FaMapMarkerAlt}
                    value={adherente.DireccionResidencia} handleChange={handleChange} id='direccionresidencia'
                    placeholder='Escribe la direccion de residencia...' />
                <InputField label='Ciudad Residencia' name='CiudadResidencia' type='text' icon={FaCity}
                    value={adherente.CiudadResidencia} handleChange={handleChange} id='ciudadresidencia'
                    placeholder='Escribe la ciudad de residencia...' />
                <InputField label='Tiempo Residencia' name='TiempoResidencia' type='number' icon={FaSortNumericUp}
                    value={adherente.TiempoResidencia} handleChange={handleChange} id='tiemporesidencia'
                    placeholder='Escribe el tiempo de residencia...' />
                <SelectField label='Estado Civil' name='EstadoCivil' icon={FaUserTag} items={ESTADOS_CIVILES}
                    id='estadocivil' value={adherente.EstadoCivil} handleChange={handleChange} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Profesion' name='Profesion' type='text' icon={FaUserGraduate} id='profesion'
                    value={adherente.Profesion} handleChange={handleChange} placeholder='Escribe la profesión...' />
                <InputField label='Trabajo' name='Trabajo' type='text' icon={FaSuitcase} id='trabajo'
                    value={adherente.Trabajo} handleChange={handleChange} placeholder='Escribe donde trabaja...' />
                <InputField label='Cargo' name='Cargo' type='text' icon={FaSuitcase} id='cargo'
                    value={adherente.Cargo} handleChange={handleChange} placeholder='Escribe el cargo...' />
                <InputField label='Tiempo Servicio' name='TiempoServicio' type='number' icon={FaSortNumericUp}
                    value={adherente.TiempoServicio} handleChange={handleChange} id='tiemposervicio'
                    placeholder='Digite el tiempo de servicio...' />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row gap-4">
                <InputField label='Teléfono Oficina' name='TelOficina' type='tel' icon={FaPhoneAlt}
                    value={adherente.TelOficina} handleChange={handleChange} id='telefonooficina'
                    placeholder='Escriba el teléfono de la oficina...' />
                <InputField label='Direccion Oficina' name='DireccionOficina' type='text' icon={FaMapMarkerAlt}
                    value={adherente.DireccionOficina} handleChange={handleChange} id='direccionoficina'
                    placeholder='Escriba la dirección  de la oficina...' />
                <InputField label='Ciudad Oficina' name='CiudadOficina' type='text' icon={FaCity}
                    value={adherente.CiudadOficina} handleChange={handleChange} id='ciudadoficina'
                    placeholder='Escriba la ciudad de la oficina...' />
            </div>
        </div>
    );
}

export default FormAdherente;