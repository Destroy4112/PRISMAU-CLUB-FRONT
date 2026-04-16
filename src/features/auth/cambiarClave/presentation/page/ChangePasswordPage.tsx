import ContainerReset from "@shared/components/shared/auth/ContainerReset";
import ContentDescription from "@shared/components/shared/auth/ContentDescription";
import FormReset from "@shared/components/shared/auth/FormReset";
import useChangePass from "../hooks/useChangePass";

export default function ChangePasswordPage() {

    const { title, description, data, loading, handleChange, handleSubmit } = useChangePass();

    return (
        <ContainerReset>
            <ContentDescription title={title} description={description} />
            <FormReset id="documento" label="Nueva Contraseña" value={data.new_password} loading={loading} type="text"
                textButton="Actualizar" handleChange={handleChange} handleSubmit={handleSubmit} />
        </ContainerReset>
    )
}
