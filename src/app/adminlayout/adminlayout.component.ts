import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/adminloginservice';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor(private router:Router,private adminloginservice:AdminLoginService) { }

  ngOnInit(): void {
  }

  logoff()
  {
    this.adminloginservice.logout();
    this.router.navigate(['home']);
  }

}
