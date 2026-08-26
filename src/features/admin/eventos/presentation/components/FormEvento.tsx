import CheckField from "@shared/components/form/CheckField"
import InputField from "@shared/components/form/InputField"
import SelectField from "@shared/components/form/SelectField"
import TextAreaField from "@shared/components/form/TextAreaField"
import { ITEMS_EVENTO, ROLES_PRINCIPALES } from "@shared/constants/options/Options.model"
import { inputValidation } from "@shared/utilities/validation/input.validation.utility"
import { FaCalendarAlt, FaClock, FaKeyboard } from "react-icons/fa"
import type { FormEventoProps } from "../types/evento"

function FormEvento({ form, touched, handleChange, handleChangeCheck }: FormEventoProps) {

   return (
      <div className="space-y-4">
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <InputField label='Titulo del Evento' name='titulo' type='text' icon={FaKeyboard} id='titulo' required
               value={form.titulo} handleChange={handleChange} placeholder='Escribe el titulo...'
               classInput={inputValidation(form.titulo, touched)} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <TextAreaField label='Descripción del Evento' name='descripcion' id='descripcion' required
               value={form.descripcion} handleChange={handleChange} placeholder="Escribe la descripcion del evento"
               classInput={inputValidation(form.descripcion, touched)} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <InputField label='Fecha del Evento' id="fecha" type="date" icon={FaCalendarAlt} required
               classInput={inputValidation(form.fecha, touched)} value={form.fecha} name='fecha'
               handleChange={handleChange} placeholder="Escribe la fecha..." />
            <InputField label='Hora del Evento' id="hora" type="time" icon={FaClock} handleChange={handleChange}
               classInput={inputValidation(form.hora, touched)} value={form.hora} name='hora'
               placeholder="Escribe la hora..." required />
            <SelectField label='Tipo de Evento' name='tipo' id='tipo' required
               value={form.tipo} handleChange={handleChange} items={ITEMS_EVENTO}
               classInput={inputValidation(form.tipo, touched)} />
            <InputField label='Fecha de Vencimiento' name='vencimiento' type='date' icon={FaCalendarAlt}
               id='vencimiento' required value={form.vencimiento} handleChange={handleChange}
               placeholder='Escribe la fecha de vencimiento...'
               classInput={inputValidation(form.vencimiento, touched)} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <CheckField id="correo" name='correo' label='Notificar Por Correo' value={form.correo}
               handleChange={handleChangeCheck} />
            <CheckField id="push" name='push' label='Notificar Por Push' value={form.push}
               handleChange={handleChangeCheck} />
         </div>
         {(form.correo || form.push) && (
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
               <SelectField label='Destinatarios' name='destinatario' id='destinatario' required
                  value={form.destinatario} handleChange={handleChange} items={ROLES_PRINCIPALES} />
            </div>
         )}
      </div >
   )
}

export default FormEvento