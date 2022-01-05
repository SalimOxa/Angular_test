import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFundereComponent } from './ajout-fundere.component';

describe('AjoutFundereComponent', () => {
  let component: AjoutFundereComponent;
  let fixture: ComponentFixture<AjoutFundereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFundereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFundereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
