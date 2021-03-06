import { Component, OnInit } from '@angular/core';
import {BeneficiaryService} from 'src/app/services/beneficiary.service';
import {CustomerLogin} from 'src/app/services/customerlogin';
import {FormBuilder, FormControl, FormGroup, Validators} from"@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  customerloginForm:FormGroup;
  loggedIn: boolean = false;
  result : any;
  err;
  
  accdetails:any;
  current:number;
 

  constructor(private router: Router,private benservice : BeneficiaryService, private cuslogin:CustomerLogin,private formBuilder : FormBuilder)
   {
     this.customerloginForm = this.formBuilder.group
     ({
       cid:new FormControl('',Validators.required),
       password:new FormControl('',Validators.required)

     });


   }

    

  ngOnInit(): void {
  }

  onSubmit(form)
  {
    this.err="";
 
    const cust = {

      "CID" : form.value.cid,
      "Password": form.value.password

    }
    
    this.cuslogin.logincustomer(cust).subscribe(data  => {
      const resultResponse:any=data;
      console.log(data);
      if(data!=null)
      {

      //const apiResponse:any = data;
    this.loggedIn = true;
    
      
  localStorage.setItem('CID',form.value.cid)
  sessionStorage.setItem('customerData',JSON.stringify(resultResponse));
  localStorage.setItem('cusAccno',resultResponse.AccountNumber);
this.benservice.accountById(form.value.cid).subscribe(data =>{
  //console.log(data);
  //const apiResponse:any = data;
  
  this.router.navigate(['customerlayout']);
})
}
else
{
  
}
    
},error=>{
  if(error.status==400){
    console.log(error.error);
    alert(error.error);
  }else{
    console.log(error);
  }
  
}
);

   
}

  get f()
  {
    return this.customerloginForm.controls;
  }

}