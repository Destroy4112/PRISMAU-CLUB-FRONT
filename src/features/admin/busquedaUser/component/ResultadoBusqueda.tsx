import imagen from "@/shared/assets/img/imagen";
import InputField from "@components/form/InputField";
import Spinner from "@components/spinner/Spinner";
import BotonLimpiar from "@components/ui/BotonLimpiar";
import { URL_BACK } from "@models/endpoints/Endpoints.model";
import { traslateRol, traslateStatus } from "@utils/convertidores/converters";
import { FaCode, FaEnvelope, FaIdCard, FaKeyboard, FaMercury, FaPhoneAlt, FaUserCog } from 'react-icons/fa';
import type { ResultadoBusquedaProps } from "../types/busquedaUser";

export default function ResultadoBusqueda({ data, loading, activo, recargar }: ResultadoBusquedaProps) {

    if (loading) {
        return (
            <div className='flex justify-center items-center h-60'>
                <Spinner />
            </div>
        );
    }
    const user = data?.user;
    const credenciales = data?.credenciales;
    const relacionado = data?.relacionado;
    const foto = user?.imagen ? `${URL_BACK + user.imagen}` : user?.Sexo === "Femenino" ? imagen.femenino : imagen.masculino;

    return (
        <>
            {activo && data?.status && user ? (
                <>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col lg:flex-row max-w-full mt-2">
                            <div className="flex flex-col items-center p-4">
                                <img src={foto} className="object-cover w-28 h-28 sm:w-40 sm:h-40 rounded-full mb-2 border-2 border-gray-200" alt="Perfil" />
                                <InputField label="Estado" id="estado" clase="mt-3" value={traslateStatus(user?.Estado)} disabled />
                            </div>
                            <div className="flex flex-col justify-between p-4 leading-normal w-full">
                                <div className="max-w-full flex flex-col sm:flex-row gap-2 mt-3">
                                    <InputField label="Nombre Completo" icon={FaKeyboard} id="nombres" value={`${user.Nombre} ${user.Apellidos}`} disabled />
                                    <InputField label="Codigo" icon={FaCode} id="codigo" value={user.Codigo || "Sin Codigo"} clase="sm:w-1/2" disabled />
                                </div>
                                <div className="max-w-full flex flex-col sm:flex-row gap-2 mt-3">
                                    <InputField label="Tipo Documento" icon={FaIdCard} id="tipodocumento" value={user.TipoDocumento} clase="sm:w-1/3" disabled />
                                    <InputField label="Documento" icon={FaIdCard} id="documento" value={user.Documento} disabled />
                                    <InputField label="Genero" icon={FaMercury} id="genero" value={user.Sexo} disabled />
                                </div>
                                <div className="max-w-full flex flex-col sm:flex-row gap-2 mt-3">
                                    <InputField label="Correo" icon={FaEnvelope} id="correo" value={user.Correo} disabled />
                                    <InputField label="Telefono" icon={FaPhoneAlt} id="telefono" value={user.Telefono} clase="sm:w-1/2" disabled />
                                    <InputField label="Rol" icon={FaUserCog} id="rol" value={traslateRol(credenciales?.Rol!)} clase="sm:w-1/2" disabled />
                                </div>
                            </div>
                        </div>

                        {credenciales?.Rol === 5 && (
                            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col lg:flex-row max-w-full mt-2">
                                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                                    <div className="max-w-full flex flex-col sm:flex-row sm:space-x-4">
                                        <InputField label="Socio" icon={FaKeyboard} id="socio" value={`${relacionado?.Nombre} ${relacionado?.Apellidos}`} disabled />
                                        <InputField label="Rol" icon={FaUserCog} id="rol" value={traslateRol(relacionado?.user_id!)} clase="sm:w-1/2" disabled />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mt-6">
                        <BotonLimpiar label="Limpiar" limpiar={recargar} />
                    </div>
                </>
            ) : activo && !data?.status ? (
                <div className="flex justify-center items-center h-60 text-red-500 font-semibold">
                    Usuario no encontrado.
                </div>
            ) : null}
        </>
    );
}
