import { PRIVATE_ROUTES } from "@app/routes/constants/rutas";
import { useAppNavigate } from "@app/routes/hooks";
import { useAppDispatch } from "@core/store/redux/hooks";
import { setSession } from "@features/auth/shared/presentation/store/session/session.slice";
import { alertError } from "@shared/utilities/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import { loginFormToPayload } from "../mappers/login-form.mapper";
import useLoginMutation from "../mutations/useLoginMutation";
import { LOGIN_FORM_INITIAL, type LoginForm } from "../types/login.form";

export default function useLogin() {

   const navigate = useAppNavigate();
   const dispatch = useAppDispatch();

   const [visible, setVisible] = useState<boolean>(false);
   const [loginForm, setLoginForm] = useState<LoginForm>(LOGIN_FORM_INITIAL);

   const toggleVisible = (): void => setVisible((v) => !v);

   const { mutate: loginMutation, isPending } = useLoginMutation();

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setLoginForm((prev) => ({ ...prev, [target.name]: target.value }));
   };

   const handleSubmit = (): void => {
      const payload = loginFormToPayload(loginForm);
      loginMutation(payload, {
         onSuccess: (res) => {
            if (res.status) {
               dispatch(setSession(res.data));
               navigate(PRIVATE_ROUTES.DASHBOARD, { replace: true });
            } else {
               res.errors.forEach((error: string) => alertError(error));
            }
         },
         onError: (error) => alertError(error.message),
      });
   };

   return {
      loginForm,
      visible,
      loading: isPending,
      toggleVisible,
      handleChange,
      handleSubmit,
   };
}