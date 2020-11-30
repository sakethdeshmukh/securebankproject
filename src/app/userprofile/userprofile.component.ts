import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountOpeningService } from '../services/accountopeningservice';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:any=[];
  trans1:any=[];

  constructor(private accservice : AccountOpeningService,private accountservice:AccountService ) { }

  ngOnInit(): void {
  }
  viewUserProfile()
  {
    const id = localStorage.getItem("CID");
    this.accservice.getUserProfile(id).subscribe((data)=> {this.user=data;})
  } 
  /* getaccountdetails()
  {
    const cid = localStorage.getItem("CID")
    this.accountservice.getaccountbynumber(cid).subscribe((data)=>{this.trans1=data;})
    
  } */

}
