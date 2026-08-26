import type { Asociado } from "@features/admin/asociados/domain/model/asociado.model";
import { useAdherenteAsociadoQuery } from "../queries/useAdherenteAsociadoQuery";

export function useAdherenteAsociadoList() {

   const { data, isLoading: loadingAsociados } = useAdherenteAsociadoQuery();

   const asociados: Asociado[] = data || [];

   return {
      asociados,
      loadingAsociados
   };
}