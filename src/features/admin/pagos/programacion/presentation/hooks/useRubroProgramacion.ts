import { useRubrosProgramacionQuery } from "../queries/useRubrosProgramacionQuery";

export function useRubroProgramacion() {

   const { data: rubros = [], isLoading } = useRubrosProgramacionQuery();

   return {
      rubros,
      isLoading,
   };
}