import type { UpdateSocioValueInput } from "../../application/contracts/socio.input";
import type { EditValorForm } from "../types/administracion";

export function socioEditValueFormToUpdateInput(form: EditValorForm): UpdateSocioValueInput {
   return {
      documento: form.documento,
      field: form.field,
      value: form.value
   };
}