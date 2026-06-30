import type { ChangeEvent } from "react";
import type { Familiar } from "../../domain/model/familiar.model";
import type { SocioDetail } from "@shared/models/usuario-detail.model";

export type FamiliarModalKey = "crearEditar" | "imagen";

export interface FamiliarForm {
    Nombre: string;
    Apellidos: string;
    TipoDocumento: string;
    Documento: string;
    Correo: string;
    Telefono: string;
    FechaNacimiento: string;
    LugarNacimiento: string;
    Sexo: string;
    EstadoCivil: string;
    DireccionResidencia: string;
    CiudadResidencia: string;
    Cargo: string;
    Parentesco: string;
}

export interface FamiliarContext {
    Codigo: string;
    Estado: number;
    asociado_id?: number;
    adherente_id?: number;
}

export const FAMILIAR_FORM_INITIAL: FamiliarForm = {
    Nombre: "",
    Apellidos: "",
    TipoDocumento: "",
    Documento: "",
    Correo: "",
    Telefono: "",
    FechaNacimiento: "",
    LugarNacimiento: "",
    Sexo: "",
    EstadoCivil: "",
    DireccionResidencia: "",
    CiudadResidencia: "",
    Cargo: "",
    Parentesco: "",
};

export const buildFamiliarContext = (socio: SocioDetail, type: "Asociado" | "Adherente"): FamiliarContext => ({
    Codigo: socio.Codigo,
    Estado: socio.Estado,
    asociado_id: type === "Asociado" ? socio.id : undefined,
    adherente_id: type === "Adherente" ? socio.id : undefined,
});

export interface FamiliarImagenForm {
    id: number | null,
    imagen: File | null,
    imagenActualUrl: string;
}

export const FAMILIAR_IMAGEN_FORM_INITIAL: FamiliarImagenForm = {
    id: null,
    imagen: null,
    imagenActualUrl: "",
};

export type CardsFamiliaresProps = {
    familiares: Familiar[] | undefined;
    loading: boolean
    cargar: (familiar: Familiar) => void,
    handleDelete: (id: number) => void,
    change: (id: number, imagen: string) => void,
    reset: (id: number) => void
}

export type FormFamiliarProps = {
    form: FamiliarForm,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
}