import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { AdminactionsComponent } from './adminactions/adminactions.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerdetailspageComponent } from './customerdetailspage/customerdetailspage.component';
import { CustomerlayoutComponent } from './customerlayout/customerlayout.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HomeComponent } from './home/home.component';
import { NeftComponent } from './neft/neft.component';
import { NetbankingregistrationComponent } from './netbankingregistration/netbankingregistration.component';
import { TransactionslipComponent } from './transactionslip/transactionslip.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminactions',component:AdminactionsComponent},
  {path:'accountstatement',component:AccountstatementComponent},
  {path:'accountsummary',component:AccountsummaryComponent},
  {path:'neft',component:NeftComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'addpayee',component:AddpayeeComponent},
  {path:'customerdetails',component:CustomerdetailsComponent},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:'home',component:HomeComponent},
  {path:'netbankingregistration',component:NetbankingregistrationComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'customerdetailspage',component:CustomerdetailspageComponent},
  {path:'transactionslip',component:TransactionslipComponent},
  {path:'adminlayout',component:AdminlayoutComponent},
  {path:'customerlayout',component:CustomerlayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
