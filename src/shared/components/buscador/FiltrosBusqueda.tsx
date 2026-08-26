import { FaKeyboard } from "react-icons/fa";
import InputField from "../form/InputField";
import SelectField from "../form/SelectField";
import BotonLimpiar from "../ui/BotonLimpiar";
import type { FiltrosBusquedaProps } from "./buscador.type";

export default function FiltrosBusqueda({ fields = [], values, handleChange, limpiar }: FiltrosBusquedaProps) {

   return (
      <div className='p-4 border border-gray-200 bg-white rounded-lg mb-4 space-y-4'>
         <div className="flex items-center justify-between flex-col sm:flex-row gap-2">
            {fields?.map((field) => {
               const Icon = field.icon || FaKeyboard;

               if (field.type === "text" || field.type === "number") {
                  return (
                     <InputField key={field.name} label={field.label} name={field.name} icon={Icon} id={`Busqueda_${field.name}`}
                        type={field.type} placeholder={field.placeholder || "Escribe aquí..."}
                        handleChange={handleChange} value={values[field.name] || ""} />
                  );
               }

               if (field.type === "select" && field.items) {
                  return (
                     <SelectField key={field.name} label={field.label} name={field.name} icon={Icon} items={field.items}
                        handleChange={handleChange} value={values[field.name] || ""} id={`Busqueda_${field.name}`} />
                  );
               }

               return null;
            })}
         </div>
         <div className="flex justify-end">
            <BotonLimpiar label="Limpiar Filtros" limpiar={limpiar} />
         </div>
      </div>
   )
}
