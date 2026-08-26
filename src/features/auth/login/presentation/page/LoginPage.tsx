import ContainerAuth from "@shared/components/shared/auth/ContainerAuth";
import ContentLogo from "../components/ContentLogo";
import FormLogin from "../components/FormLogin";
import useLogin from "../hooks/useLogin";

export default function LoginPage() {

   const { loginForm, loading, visible, toggleVisible, handleSubmit, handleChange } = useLogin();

   return (
      <ContainerAuth>
         <ContentLogo />
         <FormLogin loading={loading} form={loginForm} handleSubmit={handleSubmit} handleChange={handleChange}
            visible={visible} toggleVisible={toggleVisible} />
      </ContainerAuth>
   )
}
