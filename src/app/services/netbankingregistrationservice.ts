import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:"root"})

export class NetBankingRegistrationService {
    registrationUser(value: any) {
      throw new Error('Method not implemented.');
    }

    //baseUrl:string = environment.baseapiURl+"/api/NetRegistration/RegisterOnlineBanking";
  
    constructor(private http : HttpClient) { }

    registeruser(newuser)
  {
    return this.http.post(environment.baseapiURl+"/api/NetRegistration/RegisterOnlineBanking",newuser)
  }
}
