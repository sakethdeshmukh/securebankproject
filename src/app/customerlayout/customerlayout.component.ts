import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLogin } from 'src/app/services/customerlogin';

@Component({
  selector: 'app-customerlayout',
  templateUrl: './customerlayout.component.html',
  styleUrls: ['./customerlayout.component.css']
})
export class CustomerlayoutComponent implements OnInit {

  constructor(private router:Router,private cuslogin:CustomerLogin) { }
  custcheck;

  ngOnInit() {
    /* if(this.cuslogin.logincust)
    {
      this.custcheck=true;
    }
    else
    {
      this.custcheck=false;
      this.router.navigate(['home']);
    } */
  }
  logoff()
  {
    //sessionStorage.clear();
    this.cuslogin.Logout();
    this.router.navigate(['home']);
  }

}
