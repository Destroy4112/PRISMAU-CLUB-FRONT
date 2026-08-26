import type { ToolbarStatusOption } from "@shared/components/toolbar/ToolbarFilter";

export const statusEmpleados: ToolbarStatusOption<number | null>[] = [
   {
      label: "Todos",
      value: null,
      variant: "dark",
   },
   {
      label: "Activos",
      value: 1,
      variant: "success",
   },
   {
      label: "Inactivos",
      value: 0,
      variant: "danger",
   }
];