import type { ToolbarStatusOption } from "@shared/components/toolbar/ToolbarFilter";

export const statusSolicitudes: ToolbarStatusOption<number | null>[] = [
   {
      label: "Todos",
      value: null,
      variant: "dark",
   },
   {
      label: "Pendientes",
      value: 1,
      variant: "warning",
   },
   {
      label: "Aprobadas",
      value: 0,
      variant: "success",
   },
];