import { memo } from "react";
import type { ContainerProps } from "../types/plantilla";

function ContainerContenido({ children, collapsed }: ContainerProps) {

   return (
      <main className={`pt-20 px-4 transition-all duration-300 sm:ml-66 ${collapsed ? 'lg:ml-22' : 'lg:ml-66'}`}>
         {children}
      </main>
   );
}

export default memo(ContainerContenido);