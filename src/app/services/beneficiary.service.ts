import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDetail } from '../models/accountdetail.model';
import { Beneficiary } from '../models/beneficiary.model';


@Injectable({ providedIn: "root" })
export class BeneficiaryService {
/* 
    httpOptions = {
        headers: new HttpHeaders ({
            'Content-Type' : 'application/json'
        })
    } */

    /* baseUrl:string = "https://localhost:443331/api/Beneficiary"; */

    
    constructor(private http: HttpClient)
    {


    }

    addbeneficiary(ben)
    {
        
        const cusAccno = localStorage.getItem("cusAccno")
        return this.http.post<Beneficiary>("https://localhost:44398/api/Beneficiary/" +cusAccno ,ben );

    }

    getAllBeneficiaries()
    {
        
        const cusAccno = localStorage.getItem("cusAccno")
        return this.http.get<Beneficiary[]>("https://localhost:44398/api/AllBeneficiaries?Cusacc=" +cusAccno);

    }


    accountById(cid)
    {
        
        return this.http.get<AccountDetail>("https://localhost:44398/api/account?cid=" +cid);

    }

    
    accountByAccNumber(acc)
    {
        return this.http.get<Response>("https://localhost:44398/api/Account/GetAccountById?acc=" +acc);

    }
    
    
   

}