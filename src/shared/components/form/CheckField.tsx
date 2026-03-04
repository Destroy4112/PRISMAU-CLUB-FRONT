import { Checkbox, Label } from "flowbite-react";
import type { CheckProps } from "./form.type";

export default function CheckField({ id, label, name, value, disabled, required, handleChange }: CheckProps) {

    return (
        <div className="w-full flex gap-2">
            <Checkbox
                id={"id_" + id}
                onChange={handleChange}
                name={name}
                checked={value}
                required={required}
                disabled={disabled}
            />
            <Label htmlFor={"id_" + id} className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </Label>
            {required && <p className="mt-1 text-sm text-gray-500">*Requerido.</p>}
        </div>
    )
}
