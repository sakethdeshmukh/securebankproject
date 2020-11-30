import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminactionsComponent } from './adminactions.component';

describe('AdminactionsComponent', () => {
  let component: AdminactionsComponent;
  let fixture: ComponentFixture<AdminactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
