export interface PayMensualidadInput {
    mensualidadId : number;
    metodoPago : string;
    referenciaPago : string;
    valorDiferente : boolean;
    valor: number;
    soporte: File;
}