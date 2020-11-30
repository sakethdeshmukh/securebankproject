import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

    constructor(private http: HttpClient) { }

    Login(model) {
        
        return this.http.get('https://localhost:44398/api/AdminLogin/?AdminId=' + model.AdminId + '&AdminPassword=' + model.AdminPassword);
      }
}