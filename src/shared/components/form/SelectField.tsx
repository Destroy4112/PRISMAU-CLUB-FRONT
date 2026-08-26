import { Select } from "flowbite-react";
import type { ChangeEvent, FC, SVGProps } from "react";

type SelectProps = {
   id: string,
   clase?: string,
   classInput?: string,
   label: string,
   name: string,
   items: { value: string | number, label: string }[],
   icon?: FC<SVGProps<SVGSVGElement>>,
   value?: string | number,
   error?: boolean,
   disabled?: boolean,
   required?: boolean,
   handleChange: (e: ChangeEvent<HTMLSelectElement>) => void,
}

export default function SelectField(props: SelectProps) {

   const { id, label, items, name, value, icon, clase, disabled, required, classInput, handleChange } = props;

   return (
      <div className={`${clase ? clase : 'w-full'}`}>
         <label htmlFor={"id_" + id} className="block mb-2 text-sm font-medium text-gray-900">
            {label}
         </label>
         <Select id={"id_" + id} icon={icon} value={value ?? ""} onChange={handleChange} name={name}
            className={classInput ? classInput : ''} disabled={disabled}>
            <option value="" disabled>
               Escoja una opción
            </option>
            {items.map((item) => (
               <option key={item.value} value={item.value}>
                  {item.label}
               </option>
            ))}
         </Select>
         {required && <p className="mt-1 text-sm text-gray-500">*Requerido.</p>}
      </div>
   );
}
