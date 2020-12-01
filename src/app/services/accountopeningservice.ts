import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import {Registration} from 'src/app/models/registration.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:"root"})

export class  AccountOpeningService
{
    //baseUrl:string =environment.baseapiURl+"/api/AccountOpening/OpeningAccount";
    constructor(private http : HttpClient) { }


    registeruser(newuser)
    {
        return this.http.post(environment.baseapiURl+"/api/AccountOpening/OpeningAccount",newuser)
    }

    getUserProfile(cid)

    {
        const id = localStorage.getItem("CID");
        return this.http.get(environment.baseapiURl+"/api/userprofile?id=" +id);
    }

}