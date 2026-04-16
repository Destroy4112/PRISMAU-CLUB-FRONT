export interface CambiarForm {
    new_password: string
}

export const INITIAL_CAMBIAR_FORM: CambiarForm = {
    new_password: ''
}

export interface CambiarContext {
    documento: string
    code: string
}

export const buildCambiarContext = (documento: string, code: string): CambiarContext => ({
    documento,
    code
})