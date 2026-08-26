import { Label, TextInput } from "flowbite-react";
import type { ChangeEvent, FC, SVGProps } from "react";

interface InputProps {
   id: string,
   clase?: string,
   classInput?: string,
   label?: string,
   name?: string,
   type?: string,
   value?: string | number,
   icon?: FC<SVGProps<SVGSVGElement>>,
   placeholder?: string,
   disabled?: boolean,
   required?: boolean,
   handleChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export default function InputField(props: InputProps) {

   const { id, label, name, type, value, icon, placeholder, disabled, required, clase, classInput, handleChange } = props;

   return (
      <div className={`${clase ? clase : 'w-full'}`}>
         <Label htmlFor={"id_" + id} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
         </Label>
         <TextInput
            id={"id_" + id}
            type={type}
            onChange={handleChange}
            name={name}
            value={value ?? ''}
            icon={icon}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={classInput ? classInput : ''}
         />
         {required && <p className="mt-1 text-sm text-gray-500">*Requerido.</p>}
      </div>
   )
}
