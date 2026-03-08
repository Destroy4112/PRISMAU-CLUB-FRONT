import { Label, Textarea } from 'flowbite-react';
import type { TextareaProps } from './form.type';

export default function TextAreaField({ id, label, name, value, disabled, clase, classInput, required, placeholder, handleChange }: TextareaProps) {
    return (
        <div className={clase ? clase : 'w-full'}>
            <Label htmlFor={"id_" + id} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </Label>
            <Textarea
                id={"id_" + id}
                onChange={handleChange}
                name={name}
                value={value || ''}
                placeholder={placeholder}
                required={required}
                rows={4}
                disabled={disabled}
                className={classInput ? classInput : ''}
            />
            {required && <p className="mt-1 text-sm text-gray-500">*Requerido.</p>}
        </div>
    );
}
