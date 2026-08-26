import { Badge } from "flowbite-react";

interface BadgeStatusProps {
   status: number;
}

const statusConfig: Record<number, { label: string; color: "failure" | "success" | "warning" | "purple" | "dark"; }> = {
   0: {
      label: "Inactivo",
      color: "failure",
   },
   1: {
      label: "Activo",
      color: "success",
   },
   2: {
      label: "Retirado",
      color: "warning",
   },
   3: {
      label: "En Mora",
      color: "purple",
   },
   4: {
      label: "Retirado en Mora",
      color: "dark",
   },
};

export default function BadgeStatus({ status }: BadgeStatusProps) {
   const currentStatus = statusConfig[status] ?? {
      label: "Estado desconocido",
      color: "failure" as const,
   };

   return (
      <Badge color={currentStatus.color}>
         {currentStatus.label}
      </Badge>
   );
}