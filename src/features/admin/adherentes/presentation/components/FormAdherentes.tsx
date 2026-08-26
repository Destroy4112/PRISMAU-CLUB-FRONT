import InputField from '@shared/components/form/InputField';
import SelectField from '@shared/components/form/SelectField';
import LoadingComponent from '@shared/components/loading/LoadingComponent';
import { ESTADOS_CIVILES, GENEROS, TIPOS_DOCUMENTOS } from '@shared/constants/options/Options.model';
import { inputValidation } from '@shared/utilities/validation/input.validation.utility';
import { FaCalendarAlt, FaCity, FaCode, FaEnvelope, FaIdCard, FaKeyboard, FaMapMarkerAlt, FaMercury, FaPhoneAlt, FaSortNumericUp, FaSuitcase, FaUserGraduate, FaUserTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import type { FormAdherenteProps } from '../types/adherente';
import SelectFilterAsociado from './SelectFilterAdherente';

function FormAdherentes({ form, touched, asociados, loading, handleChange }: FormAdherenteProps) {

   if (loading) return <LoadingComponent />

   return (
      <div className='space-y-6'>
         <div className="max-w-full flex flex-col sm:flex-row gap-4">
            <SelectFilterAsociado asociados={asociados} form={form} handleChange={handleChange} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row gap-4">
            <InputField label='Nombres' name='nombre' type='text' icon={FaKeyboard} required id='nombre'
               value={form.nombre} handleChange={handleChange} placeholder='Escribe los nombres...'
               classInput={inputValidation(form.nombre, touched)} />
            <InputField label='Apellidos' name='apellidos' type='text' icon={FaKeyboard} required id='apellidos'
               value={form.apellidos} handleChange={handleChange} placeholder='Escribe los apellidos...'
               classInput={inputValidation(form.apellidos, touched)} />
            <InputField label='Codigo' name='codigo' type='text' icon={FaCode} required id='codigo'
               value={form.codigo} handleChange={handleChange} placeholder='Escribe el codigo...'
               classInput={inputValidation(form.codigo, touched)} />
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
            <InputField label='Fecha Nacimiento' name='fechaNacimiento' type='date' icon={FaCalendarAlt}
               value={form.fechaNacimiento ? form.fechaNacimiento : ""} handleChange={handleChange}
               id='fechanacimiento' placeholder='Escribe los nombres...' />
            <InputField label='Lugar Nacimiento' name='lugarNacimiento' type='text' icon={FaMapLocation}
               value={form.lugarNacimiento} handleChange={handleChange}
               id='lugarnacimiento' placeholder='Escribe el lugar de nacimiento...' />
            <SelectField label='Género' name='sexo' icon={FaMercury} required items={GENEROS} id='sexo'
               value={form.sexo} handleChange={handleChange} classInput={inputValidation(form.sexo, touched)} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row gap-4">
            <InputField label='Dirección Residencia' name='direccionResidencia' type='text' icon={FaMapMarkerAlt}
               value={form.direccionResidencia} handleChange={handleChange} id='direccionresidencia'
               placeholder='Escribe la direccion de residencia...' />
            <InputField label='Ciudad Residencia' name='ciudadResidencia' type='text' icon={FaCity}
               value={form.ciudadResidencia} handleChange={handleChange} id='ciudadresidencia'
               placeholder='Escribe la ciudad de residencia...' />
            <InputField label='Tiempo Residencia' name='tiempoResidencia' type='number' icon={FaSortNumericUp}
               value={form.tiempoResidencia} handleChange={handleChange} id='tiemporesidencia'
               placeholder='Escribe el tiempo de residencia...' />
            <SelectField label='Estado Civil' name='estadoCivil' icon={FaUserTag} items={ESTADOS_CIVILES}
               id='estadocivil' value={form.estadoCivil} handleChange={handleChange} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row gap-4">
            <InputField label='Profesion' name='profesion' type='text' icon={FaUserGraduate} id='profesion'
               value={form.profesion} handleChange={handleChange} placeholder='Escribe la profesión...' />
            <InputField label='Trabajo' name='trabajo' type='text' icon={FaSuitcase} id='trabajo'
               value={form.trabajo} handleChange={handleChange} placeholder='Escribe donde trabaja...' />
            <InputField label='Cargo' name='cargo' type='text' icon={FaSuitcase} id='cargo'
               value={form.cargo} handleChange={handleChange} placeholder='Escribe el cargo...' />
            <InputField label='Tiempo Servicio' name='tiempoServicio' type='number' icon={FaSortNumericUp}
               value={form.tiempoServicio} handleChange={handleChange} id='tiemposervicio'
               placeholder='Digite el tiempo de servicio...' />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row gap-4">
            <InputField label='Teléfono Oficina' name='telOficina' type='tel' icon={FaPhoneAlt}
               value={form.telOficina} handleChange={handleChange} id='telefonooficina'
               placeholder='Escriba el teléfono de la oficina...' />
            <InputField label='Direccion Oficina' name='direccionOficina' type='text' icon={FaMapMarkerAlt}
               value={form.direccionOficina} handleChange={handleChange} id='direccionoficina'
               placeholder='Escriba la dirección  de la oficina...' />
            <InputField label='Ciudad Oficina' name='ciudadOficina' type='text' icon={FaCity}
               value={form.ciudadOficina} handleChange={handleChange} id='ciudadoficina'
               placeholder='Escriba la ciudad de la oficina...' />
         </div>
      </div>
   );
}

export default FormAdherentes;