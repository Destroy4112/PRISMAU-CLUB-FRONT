import InputField from '@shared/components/form/InputField';
import SelectField from '@shared/components/form/SelectField';
import { ESTADOS_CIVILES, GENEROS, PARENTESCOS, TIPOS_DOCUMENTOS } from '@shared/constants/options/Options.model';
import { inputValidation } from '@shared/utilities/validation/input.validation.utility';
import { FaCalendarAlt, FaCity, FaEnvelope, FaIdCard, FaKeyboard, FaMapMarkerAlt, FaMercury, FaPhoneAlt, FaUserTag } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { MdFamilyRestroom } from "react-icons/md";
import type { FormFamiliarProps } from '../types/familiar';

function FormFamiliar({ form, touched, handleChange }: FormFamiliarProps) {

   return (
      <>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <InputField label='Nombres' name='Nombre' type='text' icon={FaKeyboard} required
               value={form.Nombre || ""} handleChange={handleChange} placeholder='Escribe los nombres...'
               id='nombre' classInput={inputValidation(form.Nombre, touched)} />
            <InputField label='Apellidos' name='Apellidos' type='text' icon={FaKeyboard} required
               value={form.Apellidos || ""} handleChange={handleChange} placeholder='Escribe los apellidos...'
               id='apellidos' classInput={inputValidation(form.Apellidos, touched)} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
            <SelectField label='Tipo Documento' name='TipoDocumento' icon={FaIdCard} required id='tipodocumento'
               items={TIPOS_DOCUMENTOS} value={form.TipoDocumento || ""} handleChange={handleChange}
               clase='sm:w-1/2' classInput={inputValidation(form.TipoDocumento, touched)} />
            <InputField label='Número Documento' name='Documento' type='number' icon={FaIdCard} required
               value={form.Documento || ""} handleChange={handleChange}
               placeholder='Escribe el numero de documento...'
               id='documento' clase='sm:w-1/2' classInput={inputValidation(form.Documento, touched)} />
            <InputField label='Correo' name='Correo' type='email' icon={FaEnvelope} id='correo'
               value={form.Correo || ""} handleChange={handleChange} placeholder='Escribe el correo...' />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
            <InputField label='Teléfono' name='Telefono' type='tel' icon={FaPhoneAlt}
               value={form.Telefono || ""} handleChange={handleChange} id='telefono'
               placeholder='Digite el número de teléfono...' />
            <InputField label='Fecha Nacimiento' name='FechaNacimiento' type='date' icon={FaCalendarAlt}
               value={form.FechaNacimiento || ""} handleChange={handleChange}
               id='fechanacimiento' placeholder='Escriba la fecha de nacimiento...' />
            <InputField label='Lugar Nacimiento' name='LugarNacimiento' type='text' icon={FaMapLocation}
               value={form.LugarNacimiento || ""} handleChange={handleChange}
               id='lugarnacimiento' placeholder='Escriba el lugar de nacimiento...' />
            <SelectField label='Sexo' name='Sexo' icon={FaMercury} items={GENEROS} required
               value={form.Sexo || ""} handleChange={handleChange} id='sexo'
               classInput={inputValidation(form.Sexo, touched)} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
            <SelectField label='Estado Civil' name='EstadoCivil' icon={FaUserTag} id='estadocivil'
               items={ESTADOS_CIVILES} value={form.EstadoCivil || ""} handleChange={handleChange} />
            <InputField label='Direccion Residencia' name='Direccion' type='text' icon={FaMapMarkerAlt}
               value={form.DireccionResidencia || ""} handleChange={handleChange}
               id='direccion' placeholder='Escriba la direccion...' />
            <InputField label='Ciudad Residencia' name='Ciudad' type='text' icon={FaCity}
               value={form.CiudadResidencia || ""} handleChange={handleChange}
               id='ciudad' placeholder='Escriba la ciudad de residencia...' />
            <SelectField label='Parentesco' name='Parentesco' icon={MdFamilyRestroom} required
               items={PARENTESCOS} value={form.Parentesco || ""} handleChange={handleChange}
               id='parentesco' classInput={inputValidation(form.Parentesco, touched)} />
         </div>
      </>
   );
}

export default FormFamiliar;