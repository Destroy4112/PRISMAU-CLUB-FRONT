import { Badge } from "flowbite-react";

interface BadgeStatusProps {
   status: boolean;
}

export default function BadgeStatusPago({ status }: BadgeStatusProps) {
   return (
      <Badge color={status ? "success" : "failure"}>
         {status ? "Pagado" : "Pendiente"}
      </Badge>
   );
}