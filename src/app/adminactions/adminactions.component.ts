import { Component, OnInit } from '@angular/core';
import {AdminActionService} from 'src/app/services/Adminaction.service';
import { Approval } from '../models/approval';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminactions',
  templateUrl: './adminactions.component.html',
  styleUrls: ['./adminactions.component.css']
})
export class AdminactionsComponent implements OnInit {
  customer:any=[];
  //searchTerm:string;
  res : boolean=false;
  app:any
  cust:any=[];

  constructor(private adminactionservice : AdminActionService,private router:Router) { }

  ngOnInit(): void {
    this.fetchpendingapprovals();
    this.fetchapprovals();
  }


  fetchpendingapprovals()
  {
    this.adminactionservice.viewpendingapprovals().subscribe((data) => {this.customer=data;})
  }

  public approveRecords(cus:boolean,cid:any)
  {
    this.app=[];
    this.app=new Approval();
    this.app.CID=cid;
    this.app.IsApproved=cus;
    this.adminactionservice.adminapproval(this.app).subscribe((data)=>{this.fetchpendingapprovals();this.fetchapprovals();})
    //this.router.navigate(['adminactions']);

  }

  fetchapprovals()
  {
    this.adminactionservice.viewapproval().subscribe((data) => {this.cust=data;})
  }
}