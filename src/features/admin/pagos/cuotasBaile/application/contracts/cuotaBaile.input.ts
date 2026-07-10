export interface PayCuotaBaileInput {
    cuotaBaileId : number;
    metodoPago : string;
    referenciaPago : string;
    valorDiferente : boolean;
    valor: number;
    soporte: File;
}