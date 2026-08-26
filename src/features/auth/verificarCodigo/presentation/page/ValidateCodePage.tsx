import ContainerReset from "@shared/components/shared/auth/ContainerReset";
import ContentDescription from "@shared/components/shared/auth/ContentDescription";
import FormReset from "@shared/components/shared/auth/FormReset";
import useVerificarCodigo from "../hooks/useVerificarCodigo";

export default function ValidateCodePage() {

   const { title, description, data, loading, handleChange, handleSubmit } = useVerificarCodigo();

   return (
      <ContainerReset>
         <ContentDescription title={title} description={description} />
         <FormReset id="documento" label="Código" value={data.code} loading={loading} type="text"
            textButton="Siguiente" handleChange={handleChange} handleSubmit={handleSubmit} />
      </ContainerReset>
   )
}