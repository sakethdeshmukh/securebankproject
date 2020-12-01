import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

    constructor(private http: HttpClient) { }

    Login(model) {
        
        return this.http.get(environment.baseapiURl+'/api/AdminLogin/?AdminId=' + model.AdminId + '&AdminPassword=' + model.AdminPassword);
      }

      logout()
      {
        if(sessionStorage.getItem('AdminId'))
        {
            sessionStorage.removeItem('AdminId');
        }
      }
}