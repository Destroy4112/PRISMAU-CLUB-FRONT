export interface LoginForm {
   documento: string;
   password: string
}

export const LOGIN_FORM_INITIAL: LoginForm = {
   documento: '',
   password: '',
};