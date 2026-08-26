import { Badge } from "flowbite-react";

interface BadgeStatusProps {
   status: number;
}

const statusConfig: Record<number, { label: string; color: "failure" | "success" | "warning" | "purple" | "dark"; }> = {
   0: {
      label: "Aprobada",
      color: "success",
   },
   1: {
      label: "Pendiente",
      color: "warning",
   },
};

export default function BadgeStatusSolicitud({ status }: BadgeStatusProps) {
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