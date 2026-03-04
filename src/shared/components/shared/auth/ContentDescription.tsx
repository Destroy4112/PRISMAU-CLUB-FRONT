import imagen from '../../../assets/img/imagen'
import type { ContentDescriptionProps } from './auth.helper'

export default function ContentDescription({ title, description }: ContentDescriptionProps) {
    return (
        <div className='md:w-1/2 px-8 pt-8 flex flex-col w-full'>
            <div className="flex items-center flex-row sm:mb-8 mb-4">
                <img alt='Logo' src={imagen.logoPrisma} className='w-8' />
                <span className='text-lg ml-2 font-medium'>PrismaU</span>
            </div>
            <h1 className='text-4xl mb-5 sm:mb-10'>{title}</h1>
            <p className='text-lg'>{description}</p>
        </div>
    )
}
