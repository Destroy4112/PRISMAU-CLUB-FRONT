import InputField from "@shared/components/form/InputField";
import SelectField from "@shared/components/form/SelectField";
import { LayoutDashboard, Link, Palette, Shapes, Type } from "lucide-react";
import type { FormMenuProps } from "../types/menu";

function FormMenu({ form, handleChange }: FormMenuProps) {

   const options = [
      { value: 'portal', label: 'Portal Autogestión' },
      { value: 'bienestar', label: 'Bienestar Laboral' },
      { value: 'perfil', label: 'Perfil de Socio' },
   ];

   return (
      <div className="space-y-4">
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <InputField label="Nombre" name='name' type='text' icon={Type} required id="name"
               value={form.name} handleChange={handleChange} placeholder='Escribe el nombre...' />
            <SelectField label="Tipo" name='type' icon={LayoutDashboard} required id="type"
               items={options} value={form.type} handleChange={handleChange} />
         </div>
         <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
            <InputField label="Ruta" name='route' type='text' icon={Link} required id="route"
               value={form.route} handleChange={handleChange} placeholder='Escribe la ruta...' />
            <InputField label="Icono" name='icon' type='text' icon={Shapes} required id="icon"
               value={form.icon} handleChange={handleChange} placeholder='Escribe el icono...' />
            <InputField label="Color" name='color' type='text' icon={Palette} required id="color"
               value={form.color} handleChange={handleChange} placeholder='Escribe el color...' />
         </div>
      </div>
   )
}

export default FormMenu