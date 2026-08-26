import Contenido from "@shared/components/helpers/Contenido";
import TituloPage from "@shared/components/helpers/TituloPage";
import { CalendarDays } from "lucide-react";
import FormProgramacion from "../components/FormProgramacion";
import useProgramacion from "../hooks/useProgramacion";

export default function ProgramacionPage() {

   const { titulo, subtitulo, programacionForm, isPending, rubros, isLoading, rubroSeleccionado, formularioCompleto,
      handleChange, handleSubmit } = useProgramacion();

   return (
      <>
         <TituloPage titulo={titulo} subtitulo={subtitulo} color="purple" icono={<CalendarDays className="w-7 h-7" />} />
         <Contenido>
            <FormProgramacion
               form={programacionForm}
               rubros={rubros}
               rubroSeleccionado={rubroSeleccionado}
               formularioCompleto={formularioCompleto}
               handleChange={handleChange}
               handleSubmit={handleSubmit}
               loading={isPending}
               loadingRubros={isLoading}
            />
         </Contenido>
      </>
   )
}
