import Contenido from '@components/helpers/Contenido';
import TituloPage from '@components/helpers/TituloPage';
import { CalendarDays } from 'lucide-react';
import useProgramacion from './hooks/useProgramacion';
import FormProgramacion from './components/FormProgramacion';
import apiQueryRubro from '../rubros/api/apiQueryRubro';

export default function ProgramacionPage() {

    const { titulo, subtitulo, programacion, isPending, handleChange, handleChangeRubro, handleSubmit } = useProgramacion();

    return (
        <>
            <TituloPage titulo={titulo} subtitulo={subtitulo} color="red" icono={<CalendarDays className="w-7 h-7" />} />
            <Contenido>
                <FormProgramacion rubros={[]} programacion={programacion} loading={isPending} handleChange={handleChange} handleChangeRubro={handleChangeRubro} handleSubmit={handleSubmit} />
            </Contenido>
        </>
    )
}
