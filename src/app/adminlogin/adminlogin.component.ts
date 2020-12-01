import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/services/adminloginservice';
import { AdminLogin } from 'src/app/models/adminlogin.model';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginobject: AdminLogin = new AdminLogin();
  err: string="";
  loginForm: FormGroup;

  constructor(private router: Router, private adminloginservice: AdminLoginService) {
    this.loginForm = new FormGroup({
      AdminId: new FormControl(null, [Validators.required]),
      AdminPassword: new FormControl(null, Validators.required)
    });
   }

   doLogin() {
     
    this.err="";
    this.adminloginservice.Login(this.loginobject).subscribe((response:any) => {
      if (response.IsValidUser) {
        
        sessionStorage.setItem('AdminId',response.AdminId);
        
        this.router.navigate(['adminlayout']);
      }
      else {
        this.err="Invalid username or password!!";
      }
    });
  }

  

  ngOnInit(): void {
    
  }

}
