export interface LoginForm {
   Documento : string;
   password : string
}

export const LOGIN_FORM_INITIAL: LoginForm = {
    Documento: '',
    password: '',
};