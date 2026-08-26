export interface VerificarForm {
   code: string
}

export const INITIAL_VERIFICAR_FORM: VerificarForm = {
   code: ''
}

export interface VerificarContext {
   documento: string
}

export const buildVerificarContext = (documento: string): VerificarContext => ({
   documento,
});