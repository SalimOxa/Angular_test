import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundereComponent } from './fundere.component';

describe('FundereComponent', () => {
  let component: FundereComponent;
  let fixture: ComponentFixture<FundereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
