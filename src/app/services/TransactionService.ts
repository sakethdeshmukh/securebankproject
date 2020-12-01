import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: "root" })
export class TransactionService {

    //baseUrl:string =environment.baseapiURl+"/api/TransactionPrimary/AddTransaction";
    constructor(private http: HttpClient)
    {


    }

    newtranasction(newtrans)
    {
        return this.http.post(environment.baseapiURl+"/api/TransactionPrimary/AddTransaction",newtrans);
    }

    getRecentTransaction(id) // fetching recent transaction of particular acc no.
    {
        
        const accno = localStorage.getItem("cusAccno");
        return this.http.get(environment.baseapiURl+"/api/transaction?id=" +accno);
    }

    gettransactionslip(id)
    {
        const tid= localStorage.getItem("tranId");
        return this.http.get(environment.baseapiURl+"/api/transuccess?TransactionID="+tid);
    }


    

}