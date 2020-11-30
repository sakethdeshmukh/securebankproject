import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { TransactionService } from '../services/TransactionService';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
  trans:any=[];
  trans1:any;

  constructor(private transervice : TransactionService,private accountservice:AccountService) { }

  ngOnInit(): void {
  }

  getRecentTransactions()
  {
    const acc = localStorage.getItem("cusAccno")
    this.transervice.getRecentTransaction(acc).subscribe((data) =>{this.trans=data;})
    
  }
  /* getaccountdetails()
  {
    const acc = localStorage.getItem("cusAccno")
    this.accountservice.getaccountbynumber(acc).subscribe((data)=>{this.trans1=data;})
    
  } */

}
