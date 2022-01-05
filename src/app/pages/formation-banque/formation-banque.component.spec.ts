import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationBanqueComponent } from './formation-banque.component';

describe('FormationBanqueComponent', () => {
  let component: FormationBanqueComponent;
  let fixture: ComponentFixture<FormationBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationBanqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
