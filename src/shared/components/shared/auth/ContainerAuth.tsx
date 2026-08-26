import { type PropsWithChildren } from 'react';

function ContainerAuth({ children }: PropsWithChildren) {
   return (
      <div className='bg-gray-100 min-h-screen animated-element'>
         <div className="flex flex-col min-h-screen justify-center items-center px-4 md:px-0">
            <div className="bg-white w-full max-w-250 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row min-h-137.5">
               {children}
            </div>
         </div>
      </div>
   );
}

export default ContainerAuth;