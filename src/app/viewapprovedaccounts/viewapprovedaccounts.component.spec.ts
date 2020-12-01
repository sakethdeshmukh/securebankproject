import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapprovedaccountsComponent } from './viewapprovedaccounts.component';

describe('ViewapprovedaccountsComponent', () => {
  let component: ViewapprovedaccountsComponent;
  let fixture: ComponentFixture<ViewapprovedaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewapprovedaccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapprovedaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
