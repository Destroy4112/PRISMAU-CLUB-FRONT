import type { ContentProps } from "./helpers.type";

export default function Contenido({ children }: ContentProps) {
    return (
        <div className='mt-7 animated-element'>
            {children}
        </div>
    );
}
