import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetail } from '../models/accountdetail.model';


@Injectable({ providedIn: "root" })
export class AccountService {

 
    constructor(private http: HttpClient)
    {


    }
    
    newtranasction(newtrans)
    {
        return this.http.post("https://localhost:44398/api/TransactionPrimary/AddTransaction",newtrans);
    }
    getaccountbynumber(cid)
    {
        return this.http.get("https://localhost:44398/api/account?cid="+cid);
    }

    //getting accsttaement between two dates from AccountStatement Controller
    getaccountstatementbtwdates(begindate,enddate,AccountNumber)
    {
        return this.http.get("https://localhost:44398/api/accountstatement?begindate="+begindate+"&"+"enddate="+enddate+"&"+"AccountNumber="+AccountNumber);
    }


}