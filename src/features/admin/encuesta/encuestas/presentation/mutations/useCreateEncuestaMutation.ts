import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { encuestaUseCases } from "../../application/container/encuesta.container";
import type { EncuestaInput } from "../../application/contracts/encuesta.input";
import { encuestaKeys } from "../queries/encuesta.keys";

export const useCreateEncuestaMutation = createApiMutation<ApiResponseVoid, EncuestaInput>(
   (payload) => encuestaUseCases.create(payload),
   {
      invalidateKeys: [encuestaKeys.all],
      errorLabel: "Error al crear la encuesta",
   }
);