import {HttpClient}  from '@angular/common/http';
import {Injectable } from '@angular/core'

@Injectable({providedIn:"root"})

export class AdminActionService
{

    constructor (private http : HttpClient)
    {

    }

    viewpendingapprovals() /// to view pendingapprovals by admin
    {
        return this.http.get("https://localhost:44398/api/Admin/getPendingApprovals")
    }

    adminapproval(app)
    {
        return this.http.post("https://localhost:44398/api/Admin/adminapproval",app)
    }

    viewapproval() /// to view approvals by admin
    {
        return this.http.get("https://localhost:44398/api/Approval/Approvals")
    }
}