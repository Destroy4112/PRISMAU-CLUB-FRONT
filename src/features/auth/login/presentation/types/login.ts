import type { ChangeEvent } from "react";
import type { LoginForm } from "./login.form";

export type FormLoginProps = {
   visible: boolean,
   loading: boolean,
   form: LoginForm
   toggleVisible: () => void,
   handleSubmit: () => void,
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void
};