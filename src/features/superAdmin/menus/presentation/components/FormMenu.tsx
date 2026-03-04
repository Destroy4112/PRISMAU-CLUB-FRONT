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
                <InputField label="Nombre" name='Name' type='text' icon={Type} required id="name"
                    value={form.Name} handleChange={handleChange} placeholder='Escribe el nombre...' />
                <SelectField label="Tipo" name='Type' icon={LayoutDashboard} required id="type"
                    items={options} value={form.Type} handleChange={handleChange} />
            </div>
            <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                <InputField label="Ruta" name='Route' type='text' icon={Link} required id="route"
                    value={form.Route} handleChange={handleChange} placeholder='Escribe la ruta...' />
                <InputField label="Icono" name='Icon' type='text' icon={Shapes} required id="icon"
                    value={form.Icon} handleChange={handleChange} placeholder='Escribe el icono...' />
                <InputField label="Color" name='Color' type='text' icon={Palette} required id="color"
                    value={form.Color} handleChange={handleChange} placeholder='Escribe el color...' />
            </div>
        </div>
    )
}

export default FormMenu