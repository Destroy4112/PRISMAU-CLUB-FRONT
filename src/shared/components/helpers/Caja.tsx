import type { ContentProps } from './helpers.type';

function Caja({ children }: ContentProps) {

    return (
        <div className="p-4 border bg-white rounded-lg border-gray-200 mt-5 w-full animated-element">
            {children}
        </div>
    );
}

export default Caja;