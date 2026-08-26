import type { ReactNode } from "react";

interface ContentProps {
   children: ReactNode
}

export default function Contenido({ children }: ContentProps) {
   return (
      <div className='mt-7 animated-element'>
         {children}
      </div>
   );
}
