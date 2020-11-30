import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from"@angular/forms";
import {Router} from"@angular/router";
import {Transaction} from 'src/app/models/transaction.model';
import {AccountService} from 'src/app/services/account.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  accountstatementform:FormGroup;
  trans:any=[];
  accountNumber: Number;
  inboundClick = false;

 
  constructor(private formBuilder: FormBuilder, private router: Router, private accountservice: AccountService) {
    
    this.accountstatementform = this.formBuilder.group({
      begindate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
      
    });
   }
   onSubmit(form)
  {
    // this.submitted=true;
    const accountNumber = parseInt(localStorage.getItem('cusAccno'));
    this.accountservice.getaccountstatementbtwdates(form.value.begindate,form.value.enddate,accountNumber).subscribe(data => {
      console.log(data);
      this.trans = data;

    })
  }
   
  ngOnInit(): void {
  }

}
