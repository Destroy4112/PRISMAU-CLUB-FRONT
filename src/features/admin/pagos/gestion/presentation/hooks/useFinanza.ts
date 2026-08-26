import { useMemo } from "react";
import { useFinanzaQuery } from "../queries/useFinanzaQuery";
import type { EstadisticasFinanza } from "../types/finanza";

const calcularPorcentaje = (valor: number, total: number) => {
   if (!total) return 0;
   return (valor / total) * 100;
};

export default function useFinanza() {
   const { data, isLoading, isError, refetch } = useFinanzaQuery();

   const estadisticas = useMemo<EstadisticasFinanza | null>(() => {
      if (!data) return null;

      const { ingresos, pendientes } = data;

      const totalPendiente = pendientes.mensualidades.monto + pendientes.cuotasBaile.monto;
      const registrosPendientes = pendientes.mensualidades.registros + pendientes.cuotasBaile.registros;
      const carteraTotal = ingresos.total + totalPendiente;

      const totalMensualidades = ingresos.mensualidades + pendientes.mensualidades.monto;
      const totalCuotasBaile = ingresos.cuotasBaile + pendientes.cuotasBaile.monto;

      const porcentajeRecaudo = calcularPorcentaje(ingresos.total, carteraTotal);
      const porcentajeMensualidades = calcularPorcentaje(ingresos.mensualidades, totalMensualidades);
      const porcentajeCuotasBaile = calcularPorcentaje(ingresos.cuotasBaile, totalCuotasBaile);

      const promedioMensualidades = pendientes.mensualidades.registros ? pendientes.mensualidades.monto / pendientes.mensualidades.registros : 0;
      const promedioCuotasBaile = pendientes.cuotasBaile.registros ? pendientes.cuotasBaile.monto / pendientes.cuotasBaile.registros : 0;

      return {
         ingresos,
         pendientes,
         totalPendiente,
         registrosPendientes,
         carteraTotal,
         porcentajeRecaudo,
         conceptos: [
            {
               id: "mensualidades",
               nombre: "Mensualidades",
               descripcion: "Pagos periódicos de los asociados",
               recaudado: ingresos.mensualidades,
               pendiente: pendientes.mensualidades.monto,
               registros: pendientes.mensualidades.registros,
               promedioPendiente: promedioMensualidades,
               porcentaje: porcentajeMensualidades,
            },
            {
               id: "cuotas-baile",
               nombre: "Cuotas de baile",
               descripcion: "Pagos asociados a eventos de baile",
               recaudado: ingresos.cuotasBaile,
               pendiente: pendientes.cuotasBaile.monto,
               registros: pendientes.cuotasBaile.registros,
               promedioPendiente: promedioCuotasBaile,
               porcentaje: porcentajeCuotasBaile,
            },
         ],
      };
   }, [data]);

   return {
      titulo: "Gestión de Pagos",
      subtitulo: "Administra y supervisa todos los aspectos relacionados con los pagos dentro de la plataforma.",
      isLoading,
      isError,
      estadisticas,
      refetch,
   };
}