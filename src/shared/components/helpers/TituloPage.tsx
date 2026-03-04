import { colorStyles } from '@shared/utilities/convertidores/converters';
import type { tituloPageProps } from './helpers.type';

export default function TituloPage({ icono, color, titulo, subtitulo }: tituloPageProps) {
    return (
        <div className='flex gap-3 border-b border-gray-200 pb-4 sticky top-15 bg-white z-10 pt-2'>
            <div className={`${colorStyles[color!]} w-12 h-12 rounded-md flex items-center justify-center`}>
                {icono}
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-lg'> {titulo} </h1>
                {subtitulo && <span className="text-sm text-gray-500"> {subtitulo} </span>}
            </div>
        </div>
    );
}
