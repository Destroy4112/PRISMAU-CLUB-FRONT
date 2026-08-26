import type { Asociado } from '@features/admin/asociados/domain/model/asociado.model';
import { useMemo } from 'react';
import type { SingleValue } from 'react-select';
import Select from 'react-select';
import type { AdherenteForm } from '../types/adherente';

type Option = { value: number; label: string };

type Props = {
   asociados: Asociado[];
   form: AdherenteForm;
   handleChange: (e: any) => void;
}

export default function SelectFilterAsociado({ asociados, form, handleChange }: Props) {

   const options: Option[] = useMemo(() => (asociados ?? []).filter(a => a.id != null).map(a => ({
      value: Number(a.id), label: `${a.nombre} ${a.apellidos}`,
   })), [asociados]);

   const selectedOption = useMemo(() => {
      const idNum = Number(form.asociadoId);
      return options.find(o => o.value === idNum) ?? null;
   }, [options, form.asociadoId]);

   const onChangeAsociado = (opt: SingleValue<Option>) => {
      const val = opt ? opt.value : null;
      handleChange({ target: { name: 'asociadoId', value: val } } as any);
   };

   return (
      <div className="w-full">
         <label htmlFor="asociadoId" className="block mb-2 text-sm font-medium text-gray-900">
            Asociado
         </label>
         <Select<Option, false>
            key="asociadoId"
            inputId="asociadoId"
            name="asociadoId"
            options={options}
            value={selectedOption}
            onChange={onChangeAsociado}
            isSearchable
            isClearable
            placeholder="Buscar asociado…"
            classNamePrefix="rs"
            required
         />
      </div>
   )
}
