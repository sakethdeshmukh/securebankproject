import {HttpClient}  from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:"root"})

export class AdminActionService
{

    constructor (private http : HttpClient)
    {

    }

    viewpendingapprovals() /// to view pendingapprovals by admin
    {
        return this.http.get(environment.baseapiURl+"/api/Admin/getPendingApprovals")
    }

    adminapproval(app)
    {
        return this.http.post(environment.baseapiURl+"/api/Admin/adminapproval",app)
    }

    viewapproval() /// to view approvals by admin
    {
        return this.http.get(environment.baseapiURl+"/api/Approval/Approvals")
    }
}