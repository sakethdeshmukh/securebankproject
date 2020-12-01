import { Component, OnInit } from '@angular/core';
import {AdminActionService} from 'src/app/services/Adminaction.service';
import { Approval } from '../models/approval';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewapprovedaccounts',
  templateUrl: './viewapprovedaccounts.component.html',
  styleUrls: ['./viewapprovedaccounts.component.css']
})
export class ViewapprovedaccountsComponent implements OnInit {
  customer:any=[];
  //searchTerm:string;
  res : boolean=false;
  app:any
  cust:any=[];

  constructor(private adminactionservice : AdminActionService,private router:Router) { }

  ngOnInit(): void {
    this.fetchapprovals();
  }

  fetchapprovals()
  {
    this.adminactionservice.viewapproval().subscribe((data) => {this.cust=data;this.fetchapprovals();})
  }

}
