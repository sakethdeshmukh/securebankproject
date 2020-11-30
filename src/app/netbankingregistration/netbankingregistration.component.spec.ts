import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankingregistrationComponent } from './netbankingregistration.component';

describe('NetbankingregistrationComponent', () => {
  let component: NetbankingregistrationComponent;
  let fixture: ComponentFixture<NetbankingregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetbankingregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetbankingregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
