import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/TransactionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactionslip',
  templateUrl: './transactionslip.component.html',
  styleUrls: ['./transactionslip.component.css']
})
export class TransactionslipComponent implements OnInit {
  STran =new Transaction();
  tranId: Number;
  id: Number;

  constructor(private transactionservice:TransactionService,private router: Router) { }

  ngOnInit(): void {
    this.getTransaction(); 
  }

  getTransaction(){
    const id = parseInt(localStorage.getItem('tranId'));
    this.transactionservice.gettransactionslip(id).subscribe((data) => {
      const resultResponse:any=data;
      console.log(data);
      this.STran = resultResponse[0];
      /*  {
        "TransactionMode": resultResponse[0].TransactionMode,
        "SenderAccount": resultResponse[0].SenderAccount,
        "RecieverAccount": resultResponse[0].RecieverAccount,
        "TransactionAmount": resultResponse[0].TransactionAmount,
        "TransactionDate": resultResponse.TransactionDate,
        "Remarks": resultResponse.Remarks,
        "Maturityinstruction":resultResponse.Maturityinstruction,
      }  */
    });
  }
  navigate(){
    //localStorage.removeItem('tranid')
    this.router.navigate(['customerdetailspage'])
    
  }
}
