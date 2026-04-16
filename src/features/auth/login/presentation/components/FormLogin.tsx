import imagen from "@/shared/assets/img/imagen";
import InputField from "@shared/components/form/InputField";
import Spinner from "@shared/components/spinner/Spinner";
import { PUBLIC_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { Button, TextInput } from "flowbite-react";
import { FaEye, FaIdCard, FaLock } from "react-icons/fa";
import { Link } from "react-router";
import type { FormLoginProps } from "../types/login";

export default function FormLogin({ loading, form, visible, toggleVisible, handleSubmit, handleChange }: FormLoginProps) {
    return (
        <div className="md:w-1/2 p-8 flex flex-col items-start justify-center w-full">
            <div className="space-y-4 w-full">
                <div className="flex items-center justify-center md:justify-start">
                    <img src={imagen.logoPrisma} alt='Logo' className='w-12 h-12 mr-2 md:hidden' />
                    <h1 className="text-3xl font-bold">PrismaU</h1>
                </div>
                <p className="text-gray-500">Ingresa tus credenciales para acceder a tu cuenta.</p>
            </div>
            <div className="w-full space-y-4 mt-6">
                <div>
                    <InputField label="Usuario" icon={FaIdCard} type="text" placeholder="Número de documento"
                        value={form.documento} name='documento' handleChange={handleChange} id="Documento" />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                    <TextInput icon={FaLock} type={`${visible ? 'text' : 'password'}`} placeholder="••••••••"
                        name='password' value={form.password} onChange={handleChange} id="password"
                        className="w-full border border-gray-200 focus:ring-2 focus:ring-green-500 rounded-xl" />
                    <button type="button" onClick={toggleVisible} className="absolute text-gray-500 inset-e-0 bottom-1 hover:text-blue-800 font-medium rounded-lg text-lg px-4 py-2">
                        <FaEye className={`${visible && 'text-blue-600'}`} />
                    </button>
                </div>
                <div className="pt-4">
                    <Button type="button" onClick={handleSubmit} disabled={loading} size="xl" color='green' className="w-full">
                        {!loading ? 'Ingresar' : <Spinner />}
                    </Button>
                </div>
                <div className="flex flex-col items-center text-sm text-gray-500">
                    <Link to={PUBLIC_ROUTES.RECUPERAR} className="text-gray-500 font-medium hover:underline">
                        Olvidé mi contraseña.
                    </Link>
                </div>
            </div>
        </div>
    )
}