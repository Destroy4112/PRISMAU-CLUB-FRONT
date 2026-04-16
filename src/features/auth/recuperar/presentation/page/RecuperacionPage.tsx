import ContainerReset from "@shared/components/shared/auth/ContainerReset";
import ContentDescription from "@shared/components/shared/auth/ContentDescription";
import FormReset from "@shared/components/shared/auth/FormReset";
import useRecuperar from "../hooks/useRecuperar";

export default function RecuperacionPage() {

    const { title, description, documento, loading, handleChangeDocumento, handleSubmit } = useRecuperar();

    return (
        <ContainerReset>
            <ContentDescription title={title} description={description} />
            <FormReset id="documento" label="Número de documento" value={documento} loading={loading} type="text"
                textButton="Siguiente" handleChange={handleChangeDocumento} handleSubmit={handleSubmit} />
        </ContainerReset>
    )
}

