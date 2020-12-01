import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeneficiaryService } from '../services/beneficiary.service';

@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrls: ['./addpayee.component.css']
})
export class AddpayeeComponent implements OnInit {

  addPayeeForm:FormGroup;
  result;

  constructor(private formbuilder:FormBuilder, private router:Router, private benservice : BeneficiaryService) 
  {

    this.addPayeeForm = this.formbuilder.group ({

      beneficiaryname: new FormControl ('', Validators.required),
      beneficiarynumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      rebeneficiarynumber : new FormControl('',Validators.required)
    },
      {

        validators: this.confirmValidator ('beneficiarynumber','rebeneficiarynumber')

      }

    );

  }

  ngOnInit(): void {
  }

  get f()
  {
    return this.addPayeeForm.controls;
  }


  confirmValidator(controlName: string, matchingcontrolName:string)
  {
    return (formGroup : FormGroup) =>{
      const bennum = formGroup.controls[controlName];
      const matchingbennum = formGroup.controls[matchingcontrolName];

      if (bennum.value !== matchingbennum.value){

        matchingbennum.setErrors({confirmValidator:true});
    
      }
      else 
      {
        matchingbennum.setErrors(null);
      }

    }
  }

  onSubmit(form)
  {
  
    const beneficiary = 
    {
      "BeneficiaryName" : form.value.beneficiaryname,
      "BenificiaryAccountNumber" : form.value.beneficiarynumber,
      "AccountNumber" : localStorage.getItem("cusAccno")
    }

    console.log(beneficiary);

    this.benservice.addbeneficiary(beneficiary).subscribe(data => {
      this.result=data;
    if(this.result==="Beneficiary Account Number does not exists")
    {
      alert("Beneficiary Account Number not registered with bank!!");
    }
    else{
      console.log(data);
      alert("Beneficiary Added Successfully!");
      this.router.navigate(['customerlayout/neft']);
    }
      

    })


  }

}