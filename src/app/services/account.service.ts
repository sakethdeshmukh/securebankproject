import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountDetail } from '../models/accountdetail.model';



@Injectable({ providedIn: "root" })
export class AccountService {

    

    constructor(private http: HttpClient)
    {
   
              
    }
    
    newtranasction(newtrans)
    {
        return this.http.post( environment.baseapiURl+"/api/TransactionPrimary/AddTransaction",newtrans);
    }
    getaccountbynumber(cid)
    {
        return this.http.get(environment.baseapiURl+"/api/account?cid="+cid);
    }

    //getting accsttaement between two dates from AccountStatement Controller
    getaccountstatementbtwdates(begindate,enddate,AccountNumber)
    {
        return this.http.get(environment.baseapiURl+"/api/accountstatement?begindate="+begindate+"&"+"enddate="+enddate+"&"+"AccountNumber="+AccountNumber);
    }


}