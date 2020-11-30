import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';

@Injectable({providedIn:"root"})

export class NetBankingRegistrationService {
    registrationUser(value: any) {
      throw new Error('Method not implemented.');
    }

    baseUrl:string = "https://localhost:44398/api/NetRegistration/RegisterOnlineBanking";
  
    constructor(private http : HttpClient) { }

    registeruser(newuser)
  {
    return this.http.post(this.baseUrl,newuser)
  }
}
