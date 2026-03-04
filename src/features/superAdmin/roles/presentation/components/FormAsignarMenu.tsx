import SelectField from "@shared/components/form/SelectField";
import type { FormMenuRolProps } from "../types/menuRol";

function FormAsignarMenu({ form, menus, handleChange }: FormMenuRolProps) {

    const items = menus?.map((menu) => ({ value: menu.id!, label: menu.Name })) ?? [];

    return (
        <div className="max-w-full flex flex-col">
            <SelectField label="Escoja un menu" name='menu_id' required items={items} id="menu"
                handleChange={handleChange} value={form.menu_id ?? ""} />
        </div>
    )
}

export default FormAsignarMenu