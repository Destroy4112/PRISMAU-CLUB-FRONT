import InputField from '@components/form/InputField';
import SelectField from '@components/form/SelectField';
import { ESTADOS_NORMAL } from '@models/options/Options.model';
import { inputValidation } from '@utils/validation/input.validation.utility';
import { FaEye, FaKeyboard } from 'react-icons/fa';
import type { FormEspacioProps } from '../types/espacio';

function FormEspacio({ espacio, touched, handleChange }: FormEspacioProps) {

    return (
        <>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label='Descripción' name='Descripcion' type='text' icon={FaKeyboard} required id='descripcion'
                    value={espacio.Descripcion} handleChange={handleChange} placeholder='Escribe la descripción...'
                    classInput={inputValidation(espacio.Descripcion, touched)} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4 sm:mt-3">
                <SelectField label='Estado' name='Estado' icon={FaEye} required id='estado'
                    items={ESTADOS_NORMAL} value={espacio.Estado || ""} handleChange={handleChange}
                    classInput={inputValidation(espacio.Estado, touched)} />
            </div>
        </>
    );
}

export default FormEspacio;