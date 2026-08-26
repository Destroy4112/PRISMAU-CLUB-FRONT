import { PUBLIC_ROUTES } from '@app/routes/constants/rutas';
import Spinner from '@shared/components/spinner/Spinner';
import type { ChangeEvent } from 'react';
import { Link } from 'react-router';

interface FormResetProps {
   id: string;
   label: string;
   type: string;
   value: string | number;
   loading: boolean;
   textButton: string;
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
   handleSubmit: () => void;
};

export default function FormReset({ id, label, type, value, loading, textButton, handleChange, handleSubmit }: FormResetProps) {
   return (
      <div className='md:w-1/2 px-8 pt-8 flex flex-col items-end justify-end w-full'>
         <div className="relative w-full my-auto">
            <input type={type} id={id} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "
               onChange={handleChange} value={value} />
            <label htmlFor={id} className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto inset-s-1">
               {label}
            </label>
         </div>
         <div className="flex flex-row my-5">
            <Link to={PUBLIC_ROUTES.LOGIN} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 sm:px-5 py-2 sm:py-2.5 text-center me-2 mb-2">Cancelar</Link>
            <button type='button' disabled={loading} onClick={handleSubmit} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 sm:px-5 py-2 sm:py-2.5 text-center me-2 mb-2">
               {loading ? <Spinner /> : textButton}
            </button>
         </div>
      </div>
   )
}
