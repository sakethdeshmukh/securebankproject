import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.component.html',
  styleUrls: ['./accountbalance.component.css']
})
export class AccountbalanceComponent implements OnInit {
  trans1:any;

  constructor(private accountservice:AccountService) { }

  ngOnInit(): void {
  }

  getaccountdetails()
  {
    const cid = localStorage.getItem("CID")
    this.accountservice.getaccountbynumber(cid).subscribe((data)=>{this.trans1=data;})
    
  }

}
