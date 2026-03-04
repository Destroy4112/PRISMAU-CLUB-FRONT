import { useMemo } from 'react';
import type { SingleValue } from 'react-select';
import Select from 'react-select';
import type { FormAdherenteProps, Option } from '../types/adherente';

export default function SelectFilterAdherente({ asociados, adherente, handleChange }: FormAdherenteProps) {

    const options: Option[] = useMemo(
        () =>
            (asociados ?? [])
                .filter(a => a.id != null)
                .map(a => ({
                    value: Number(a.id),
                    label: `${a.Nombre} ${a.Apellidos}`,
                })),
        [asociados]
    );

    const selectedOption = useMemo(() => {
        const idNum = Number(adherente.asociado_id);
        return options.find(o => o.value === idNum) ?? null;
    }, [options, adherente.asociado_id]);

    const onChangeAsociado = (opt: SingleValue<Option>) => {
        const val = opt ? opt.value : null;
        handleChange({ target: { name: 'asociado_id', value: val } } as any);
    };

    return (
        <div className="w-full">
            <label htmlFor="asociado_id" className="block mb-2 text-sm font-medium text-gray-900">
                Asociado
            </label>
            <Select<Option, false>
                key={`asoc_${adherente?.id ?? 'new'}_${options.length}`}
                inputId="asociado_id"
                name="asociado_id"
                options={options}
                value={selectedOption}
                onChange={onChangeAsociado}
                isSearchable
                isClearable
                placeholder="Buscar asociado…"
                classNamePrefix="rs"
            />
        </div>
    )
}
