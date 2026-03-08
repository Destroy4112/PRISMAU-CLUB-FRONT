import { useAppNavigate } from "@app/routes/hooks";
import { useAppDispatch } from "@core/store/redux/hooks";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { alertError } from "@shared/utilities/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import useLoginMutation from "../mutations/useLoginMutation";
import { setSession } from "../store/auth.slice";
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
        loginMutation(loginForm, {
            onSuccess: (session) => {
                dispatch(setSession(session));
                navigate(PRIVATE_ROUTES.DASHBOARD, { replace: true });
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