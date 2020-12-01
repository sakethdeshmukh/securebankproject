import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})

export class CustomerLogin
{
    //loggedin;
    //logincust;
    //baseUrl : string = environment.baseapiURl+"/api/login";
    constructor(private http:HttpClient,private router:Router)
    {

    }

    logincustomer(cust)
    {
        
        return this.http.post(environment.baseapiURl+"/api/login",cust);
    }
    checkLogin()
    {
        /* this.logincust=sessionStorage.getItem('customerData');
        if(this.logincust!=null)
        {
            this.loggedin=true;
        }
        else
        {
            this.loggedin=false;
        } */
        if(sessionStorage.getItem('customerData'))
        {
            return true;
        }
        return false;
    }
    //public signin:boolean;

    Logout()
    {
        /* sessionStorage.clear();
        this.signin=false;
        this.router.navigate(['home']); */
        if(sessionStorage.getItem('customerData'))
        {
            sessionStorage.removeItem('customerData');
        }
    }
}