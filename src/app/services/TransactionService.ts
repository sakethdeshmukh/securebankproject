import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root" })
export class TransactionService {

    baseUrl:string ="https://localhost:44398/api/TransactionPrimary/AddTransaction";
    constructor(private http: HttpClient)
    {


    }

    newtranasction(newtrans)
    {
        return this.http.post(this.baseUrl,newtrans);
    }

    getRecentTransaction(id) // fetching recent transaction of particular acc no.
    {
        
        const accno = localStorage.getItem("cusAccno");
        return this.http.get("https://localhost:44398/api/transaction?id=" +accno);
    }

    gettransactionslip(id)
    {
        const tid= localStorage.getItem("tranId");
        return this.http.get("https://localhost:44398/api/transuccess?TransactionID="+tid);
    }


    

}