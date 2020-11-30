export class Transaction 
{
    TransactionMode:string;
    TransactionType?:string;
    SenderAccount: number;
    RecieverAccount: number;
    TransactionAmount: number;
    TransactionDate: Date;
    Remarks?: string;
    Maturityinstruction?:string;
    TransactionID?:number;
}