import type { ToolbarStatusOption } from "@shared/components/toolbar/ToolbarFilter";

export const statusEstados: ToolbarStatusOption<string | null>[] = [
   {
      label: "Todos",
      value: null,
      variant: "dark",
   },
   {
      label: "Activos",
      value: "Activo",
      variant: "success",
   },
   {
      label: "Inactivos",
      value: "Inactivo",
      variant: "danger",
   },
   {
      label: "En Mora",
      value: "Mora",
      variant: "purple",
   },
   {
      label: "Retirados",
      value: "Retirado",
      variant: "warning",
   },
   {
      label: "Retirados en Mora",
      value: "Retirado en mora",
      variant: "dark",
   },
];