import { useRespuestaEncuestaQuery } from "../queries/useRespuestaEncuestaQuery";

export function useRespuestaEncuestaList(id: number) {

   const { data: respuestas, isLoading } = useRespuestaEncuestaQuery(id);

   return {
      respuestas,
      isLoading,
   };
}