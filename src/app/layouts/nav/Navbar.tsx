import imagen from '@/shared/assets/img/imagen';
import React from 'react';
import type { NavBarProps } from '../types/plantilla';

const Navbar = React.memo(({ usuario, logout }: NavBarProps) => {

    const sesion = `${usuario?.nombre?.charAt(0)}${usuario?.apellidos?.charAt(0)}`;

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <p className="flex ms-2 md:me-24">
                            <img src={imagen.logoPrisma} className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="self-center hidden sm:block text-xl font-semibold whitespace-nowrap">
                                PrismaU Club
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center ms-3">
                        <div className="flex items-center ms-3">
                            <div onClick={logout} className="relative inline-flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full cursor-pointer">
                                <span className="font-medium text-gray-600">
                                    {sesion}
                                </span>
                                <span className="bottom-0 left-6 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
})

export default React.memo(Navbar);