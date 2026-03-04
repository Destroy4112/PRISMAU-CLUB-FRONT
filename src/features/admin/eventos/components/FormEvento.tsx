import InputField from '@components/form/InputField';
import SelectField from '@components/form/SelectField';
import TextAreaField from '@components/form/TextAreaField';
import { ITEMS_EVENTO, ROLES_PRINCIPALES } from '@models/options/Options.model';
import { inputValidation } from '@utils/validation/input.validation.utility';
import { FaCalendarAlt, FaClock, FaKeyboard } from 'react-icons/fa';
import type { FormEventoProps } from '../types/eventos';
import CheckField from '@components/form/CheckField';

function FormEvento({ evento, touched, handleChange, handleChangeCheck }: FormEventoProps) {

    return (
        <div className="space-y-4">
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Titulo del Evento' name='Titulo' type='text' icon={FaKeyboard} id='titulo' required
                    value={evento.Titulo} handleChange={handleChange} placeholder='Escribe el titulo...'
                    classInput={inputValidation(evento.Titulo, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <TextAreaField label='Descripción del Evento' name='Descripcion' id='descripcion' required
                    value={evento.Descripcion} handleChange={handleChange}
                    classInput={inputValidation(evento.Descripcion, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Fecha del evento' id="Fecha" type="date" icon={FaCalendarAlt} required
                    classInput={inputValidation(evento.Fecha, touched)} value={evento.Fecha} name='Fecha'
                    handleChange={handleChange} placeholder="Escribe la fecha..." />
                <InputField label='Hora del Evento' id="Hora" type="time" icon={FaClock} handleChange={handleChange}
                    classInput={inputValidation(evento.Hora, touched)} value={evento.Hora} name='Hora'
                    placeholder="Escribe la hora..." required />
                <SelectField label='Tipo de Evento' name='Tipo' id='tipo' required
                    value={evento.Tipo} handleChange={handleChange} items={ITEMS_EVENTO}
                    classInput={inputValidation(evento.Tipo, touched)} />
                <InputField label='Fecha de Vencimiento' name='Vencimiento' type='date' icon={FaCalendarAlt}
                    id='vencimiento' required value={evento.Vencimiento} handleChange={handleChange}
                    placeholder='Escribe la fecha de vencimiento...'
                    classInput={inputValidation(evento.Vencimiento, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <CheckField id="correo" name='Correo' label='Notificar Por Correo' value={evento.Correo}
                    handleChange={handleChangeCheck} />
                <CheckField id="push" name='Push' label='Notificar Por Push' value={evento.Push}
                    handleChange={handleChangeCheck} />
            </div>
            {(evento.Correo || evento.Push) && (
                <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                    <SelectField label='Destinatarios' name='Destinatario' id='destinatario' required
                        value={evento.Destinatario} handleChange={handleChange} items={ROLES_PRINCIPALES} />
                </div>
            )}
        </div >
    )
}

export default FormEvento