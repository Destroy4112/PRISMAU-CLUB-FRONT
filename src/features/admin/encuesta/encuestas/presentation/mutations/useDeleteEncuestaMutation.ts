import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { encuestaUseCases } from "../../application/container/encuesta.container";
import type { EncuestaId } from "../../domain/model/encuesta.model";
import { encuestaKeys } from "../queries/encuesta.keys";

export const useDeleteEncuestaMutation = createApiMutation<ApiResponseVoid, EncuestaId>(
   (id) => encuestaUseCases.delete(id),
   {
      invalidateKeys: [encuestaKeys.all],
      errorLabel: "Error al eliminar la encuesta",
   }
);