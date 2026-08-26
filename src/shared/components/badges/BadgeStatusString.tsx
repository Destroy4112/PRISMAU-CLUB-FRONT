import { Badge } from "flowbite-react";

interface BadgeStatusProps {
   status: string;
}

const statusConfig: Record<string, { color: "failure" | "success" | "warning" | "purple" | "dark"; }> = {
   "Inactivo": {
      color: "failure",
   },
   "Activo": {
      color: "success",
   },
   "Retirado": {
      color: "warning",
   },
   "Mora": {
      color: "purple",
   },
   "Retirado en mora": {
      color: "dark",
   },
};

export default function BadgeStatusString({ status }: BadgeStatusProps) {
   const currentStatus = statusConfig[status] ?? {
      color: "failure" as const,
   };

   return (
      <Badge color={currentStatus.color}>
         {status}
      </Badge>
   );
}