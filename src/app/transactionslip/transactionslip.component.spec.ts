import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionslipComponent } from './transactionslip.component';

describe('TransactionslipComponent', () => {
  let component: TransactionslipComponent;
  let fixture: ComponentFixture<TransactionslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
