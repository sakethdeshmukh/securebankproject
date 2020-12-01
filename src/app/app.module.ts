import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ConfirmEqualValidatorDirective} from 'src/app/shared/confirm-equal-validator.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { AdminactionsComponent } from './adminactions/adminactions.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminActionService } from './services/Adminaction.service';
import { AccountOpeningService } from './services/accountopeningservice';
import { TransactionService } from './services/TransactionService';
import { BeneficiaryService } from './services/beneficiary.service';
import { CustomerLogin } from './services/customerlogin';
import { HttpClientModule } from '@angular/common/http';
import { AccountstatementComponent } from './accountstatement/accountstatement.component';
import { AdminLoginService } from './services/adminloginservice';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NeftComponent } from './neft/neft.component';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomeComponent } from './home/home.component';
import { NetbankingregistrationComponent } from './netbankingregistration/netbankingregistration.component';
import { NetBankingRegistrationService } from './services/netbankingregistrationservice';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomerdetailspageComponent } from './customerdetailspage/customerdetailspage.component';
import { TransactionslipComponent } from './transactionslip/transactionslip.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountbalanceComponent } from './accountbalance/accountbalance.component';
import { CustomerlayoutComponent } from './customerlayout/customerlayout.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { PendingApprovalsComponent } from './approvals/pending-approvals.component';
import { ViewapprovedaccountsComponent } from './viewapprovedaccounts/viewapprovedaccounts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpayeeComponent,
    AdminactionsComponent,
    CustomerdetailsComponent,
    CustomerloginComponent,
    AccountstatementComponent,
    AdminloginComponent,
    NeftComponent,
    AccountsummaryComponent,
    UserprofileComponent,
    HomeComponent,
    NetbankingregistrationComponent,
    ConfirmEqualValidatorDirective,
    AboutusComponent,
    CustomerdetailspageComponent,
    TransactionslipComponent,
    HeaderComponent,
    FooterComponent,
    AccountbalanceComponent,
    CustomerlayoutComponent,
    AdminlayoutComponent,
    NavbarComponent,
    //PendingApprovalsComponent,
    ViewapprovedaccountsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,HttpClientModule
    
  ],
  providers: [AdminActionService,AccountOpeningService,TransactionService,BeneficiaryService,CustomerLogin,AdminLoginService,NetBankingRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
