import CardSkeleton from "@components/skeletons/CardSkeleton";
import { URL_BACK } from "@models/endpoints/Endpoints.model";
import { Dropdown, DropdownItem } from "flowbite-react";
import { CalendarDays, Edit, EllipsisVertical, Image, Trash2 } from "lucide-react";
import type { CardsEspaciosProps } from "../types/espacio";
import imagen from "@/shared/assets/img/imagen";

export default function CardsEspacios({ espacios, loading, cargar, handleDelete, cambiarImagen, disponibilidad }: CardsEspaciosProps) {

    if (loading) return <CardSkeleton />;

    const estado = (status: number) => status === 1 ?
        { color: "bg-green-100 text-green-800", text: "Activo" } : { color: "bg-red-100 text-red-800", text: "Inactivo" };

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
            {espacios.map((espacio) => (
                <div key={espacio.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100 rounded-t-lg">
                        <img src={espacio.imagen ? URL_BACK + espacio.imagen : imagen.logoPrisma} alt="Espacio Imagen"
                            className="h-full w-full object-contain hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3">
                            <span className={`${estado(espacio.Estado).color} text-xs font-semibold px-3 py-1 rounded-full`}>
                                {estado(espacio.Estado).text}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-start p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
                            {espacio.Descripcion}
                        </h5>
                        <div className="flex">
                            <Dropdown inline={true} label={<EllipsisVertical className="text-gray-600 cursor-pointer" />} arrowIcon={false} size="sm">
                                <DropdownItem icon={Edit} onClick={() => cargar(espacio)}>
                                    Editar
                                </DropdownItem>
                                <DropdownItem icon={Trash2} onClick={() => handleDelete(espacio.id!)}>
                                    Eliminar
                                </DropdownItem>
                                <DropdownItem icon={Image} onClick={() => cambiarImagen(espacio.id!, espacio.imagen!)}>
                                    Cambiar logo
                                </DropdownItem>
                                <DropdownItem icon={CalendarDays} onClick={() => disponibilidad(espacio.id!)}>
                                    Disponibilidad
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
