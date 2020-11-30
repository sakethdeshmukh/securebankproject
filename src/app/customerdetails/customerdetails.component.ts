import { Component, OnInit } from '@angular/core';
import {AccountOpeningService} from 'src/app/services/accountopeningservice';
import {NgForm} from '@angular/forms';
import {Registration} from 'src/app/models/registration.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  newuser:Registration;
  result:any=[];

  constructor(private router :Router,private accountopeningservice : AccountOpeningService) 
  { this.newuser ={
    CID:null,
    FirstName:"",
    MiddleName:"",
    LastName:"",
    FatherName:"",
    MobileNumber:"",
    EmailID:"",
    AadharNumber:null,
    DOB: new Date, 
    PAddressLine1:"",
    PAddressLine2:"",
    PLandmark:"",
    PState:"",
    PCity:"",
    PPincode:"",
    RAddressLine1:"",
    RAddressLine2:"",
    RLandmark:"",
    RState:"",
    RCity:"",
    RPincode:"",
    Occupationtype:"",
    SourceofIncome:"",
    GrossannualIncome:null,
    NetBankingOpted:false,
    DebitCardOpted:false,
  }

  }

  onSubmit(userform:NgForm)
  {
    console.log(userform.value)
    this.accountopeningservice.registeruser(this.newuser).subscribe((data)=>{this.result.data;})
    alert ('Successfully Submitted!');
    this.router.navigate(['home']);
    
  }

  ngOnInit(): void {
  }

}