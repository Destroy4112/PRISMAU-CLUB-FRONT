import { getFilePreview } from "@shared/utilities/convertidores/converters";
import type { CreateEspacioInput, UpdateEspacioInput } from "../../application/contracts/espacio.input";
import type { Espacio } from "../../domain/model/espacio.model";
import type { EspacioCreateDTO, EspacioDTO, EspacioUpdateDTO } from "../dtos/espacio.dto";

export function espacioDtoToDomain(dto: EspacioDTO): Espacio {
   return {
      id: dto.id,
      descripcion: dto.Descripcion,
      imagen: dto.imagen,
      imagePreview: getFilePreview(dto.imagen)!,
      estado: dto.Estado,
   };
}

export function espacioInputToCreateDto(payload: CreateEspacioInput): EspacioCreateDTO {
   return {
      Descripcion: payload.descripcion,
      imagen: payload.imagen,
      Estado: payload.estado
   };
}

export function espacioInputToUpdateDto(payload: UpdateEspacioInput): EspacioUpdateDTO {
   return {
      id: payload.id,
      Descripcion: payload.descripcion,
      imagen: payload.imagen,
      Estado: payload.estado,
   };
}

export function createEspacioDtoToFormData(dto: EspacioCreateDTO): FormData {
   const formData = new FormData();
   formData.append("Descripcion", dto.Descripcion);
   if (dto.imagen && dto.imagen instanceof File) formData.append("imagen", dto.imagen);
   formData.append("Estado", dto.Estado.toString());
   return formData;
}

export function updateEspacioDtoToFormData(dto: EspacioUpdateDTO): FormData {
   const formData = new FormData();
   formData.append("Descripcion", dto.Descripcion);
   if (dto.imagen && dto.imagen instanceof File) formData.append("imagen", dto.imagen);
   formData.append("Estado", dto.Estado.toString());
   return formData;
}