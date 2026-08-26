import type { ToolbarStatusOption } from "@shared/components/toolbar/ToolbarFilter";

export const statusSocios: ToolbarStatusOption<number | null>[] = [
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
   },
   {
      label: "En Mora",
      value: 3,
      variant: "purple",
   },
   {
      label: "Retirados",
      value: 2,
      variant: "warning",
   },
   {
      label: "Retirados en Mora",
      value: 4,
      variant: "dark",
   },
];