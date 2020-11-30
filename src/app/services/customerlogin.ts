import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root'})

export class CustomerLogin
{
    baseUrl : string = "https://localhost:44398/api/login";
    constructor(private http:HttpClient)
    {

    }

    logincustomer(cust)
    {
        
        return this.http.post(this.baseUrl,cust);
    }
    doLogin()
    {
        if(sessionStorage.getItem('customerData'))
        {
            return true;
        }
        return false;
    }

    Logout()
    {
        if(sessionStorage.getItem('customerData'))
        {
            sessionStorage.removeItem('customerData');
        }
    }
}