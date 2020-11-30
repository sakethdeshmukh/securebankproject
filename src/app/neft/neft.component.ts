import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {BeneficiaryService} from 'src/app/services/beneficiary.service';
import {Transaction} from 'src/app/models/transaction.model';
import {TransactionService} from 'src/app/services/TransactionService';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Beneficiary } from '../models/beneficiary.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {
  neftForm:FormGroup;
  listBeneficiaries: Beneficiary[];
  beneficiary: Beneficiary;
  transaction: Transaction;
  STran: Transaction;
  tranId:any;
  accdetail;


  constructor(private formBuilder: FormBuilder,private router:Router,private beneficiaryservice:BeneficiaryService,private transactionservice:TransactionService) {
    this.neftForm = this.formBuilder.group({
      toaccount: new FormControl('',Validators.required),
      amount: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
      date: new FormControl('', Validators.required),
      remark: new FormControl(''),
      transactionpwd: new FormControl('',Validators.required)
    });
   
   }
   ngOnInit(): void {
    this.getBeneficiaries();
    
  }
   getBeneficiaries()
   {
     
     this.beneficiaryservice.getAllBeneficiaries().subscribe(data=>{
       console.log(this.listBeneficiaries);
       this.listBeneficiaries=data;
      })
     
   }
   setben(ben:Beneficiary)
   {
     console.log(ben)
     this.beneficiary=ben;
   }
   onSubmit(form)
  {
    console.log(form.value);
const sender=Number(localStorage.getItem('cusAccno'));
console.log(sender);

this.transaction={
      "TransactionMode":"NEFT",
      "SenderAccount":sender,
      "RecieverAccount":form.value.toaccount,
      "TransactionAmount":form.value.amount,
      "TransactionDate":new Date(),
      "Remarks":form.value.remark
}


/* this.beneficiaryservice.accountByAccNumber(this.transaction.SenderAccount).subscribe(data=>this.accdetail);

[console.log(this.accdetail)]; */


//const cusAccontNumber = Number(localStorage.getItem('AccountNumber'))
    this.beneficiaryservice.accountByAccNumber(this.transaction.SenderAccount).subscribe((data) => {
      const resultResponse:any=data;
      //console.log(data);
      if(resultResponse.TransactionPassword === form.value.transactionpwd)
      {
    
      this.transactionservice.newtranasction(this.transaction).subscribe((data) =>
      {
        if(data === "Insufficient Funds to carry out this trasaction")
        {
          alert("Transaction Failed\nPlease check your accout balance")
        }
        else 
      {
        this.tranId=data;
        localStorage.setItem('tranId',data.toString())
        alert("Transaction Successful!!! Thank you for choosing us.")
        this.router.navigate(['transactionslip']);
      }
    })
  }
    else
    {
      alert("Incorrect transaction password")
    }
 
    })
 }
  get f()
  {
    return this.neftForm.controls;
  }
  

}
