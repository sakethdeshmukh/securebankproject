import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { NetBankingRegistration} from 'src/app/models/netbankingregistration.model';
import {NetBankingRegistrationService} from 'src/app/services/netbankingregistrationservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netbankingregistration',
  templateUrl: './netbankingregistration.component.html',
  styleUrls: ['./netbankingregistration.component.css']
})
export class NetbankingregistrationComponent implements OnInit {
  newuser:NetBankingRegistration;
  result:any=[];
  constructor(private netbankingregistrationservice:NetBankingRegistrationService,private router:Router) {
    this.newuser={
      AccountNumber:null,
      Password:"",
      ConfirmPassword:"",
      TransactionPassword:"",
      ConfirmTransactionPassword:"",
    }
   }
   onSubmit(userform:NgForm)
   {
       console.log(userform.value)
       this.netbankingregistrationservice.registeruser(this.newuser).subscribe((data)=>{this.result=data;
        if(this.result==="Registered Successfully")
        {
       alert ('Successfully Registered!!!');
       this.router.navigate(['customerlogin']);
        }
        else
        {
          alert("Account Number not registered with bank!!!");
        }
      })

   }

  ngOnInit(): void {

  }

}
